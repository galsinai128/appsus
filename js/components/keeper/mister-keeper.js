import notesService from '../../services/appsus-services.js'
import keeperHeader from './keeper-header-cmp.js'
import newNote from './new-note-cmp.js'
import myNotes from './my-notes-cmp.js'
import searchNote from './search-note-cmp.js'
// import {eventBus, EVENT_SAVE_NOTE} from '../../services/eventbus-service.js'

export default{
    template: `
        <section class= "mister-keeper flex flex-dir-col justify-content-center align-items-center">
            <keeper-header></keeper-header>
            <new-note v-on:addNote="addNote"></new-note>
            <search-note class="flex justify-content-center align-items-center"
                v-on:filter="filter">
            </search-note>
            <my-notes 
                v-bind:notes="notesToShow"
                v-on:deleteNote="deleteNote"
                v-on:setColor="setColor"
                v-on:pinNote="pinNote">
            </my-notes>            
        </section> 
        `,
    components: {keeperHeader,newNote,myNotes,searchNote},
    data(){
        return {
            notes:[],
            filteredNotes:[],
            isFiltered:false
        }
    },
    created(){
        notesService.notesQuery().then(this.setNotes)
    },
    methods:{
        pinNote(id){
            notesService.pinNote(id)
            .then(this.setNotes)
        },
        deleteNote(id){
            notesService.deleteNote(id)
            .then(this.setNotes)
        },
        setNotes (notes){
            this.notes = notes
        },
        addNote(text,color){
            notesService.addNote(text,color)
            .then(this.setNotes)
        },
        setColor(id,color){ 
            notesService.setColor(id,color)
            .then(this.setNotes)
        },
        filter(str){
            if (str) this.isFiltered = true;
            else this.isFiltered = false;
            for (var i in this.notes){
                if (this.notes[i].content.includes(str)){
                    this.filteredNotes.push(this.notes[i])
                }
            }
        }
    },
    computed:{
        notesToShow(){
            if (!this.isFiltered) return this.notes;
            else return this.filteredNotes;
        }
    }

}