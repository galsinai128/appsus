import notesService from '../../services/appsus-services.js'
import noteActions from './note-actions-cmp.js'
import noteSaveButtons from './note-save-buttons-cmp.js'

export default{
    template: `
        <section class= "note-focused" >
            <div class="note-focused-container flex flex-dir-col justify-content-center align-items-center">
                <note-save-buttons v-on:saveNote="saveNoteChanges"></note-save-buttons>
                <textarea class="note-input" rows="100" cols="100" v-model="noteContent"></textarea>
                <!-- <note-actions></note-actions> -->
            </div>
        </section> 
        `,
    props:['note'],
    data(){
        return{
            noteContent : '',
        }
    },
    methods:{
        editNote(){
            this.isShown = true;
        },
        saveNoteChanges(){
            notesService.setNoteContent(this.$route.params.noteId,this.noteContent)
        }
    },
    created(){
        notesService.getNoteById(this.$route.params.noteId).then(note => this.noteContent = note.content)
    },
    components:{noteActions,noteSaveButtons}

}