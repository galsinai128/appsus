import notesService from '../../services/appsus-services.js'
import notePreview from './note-preview-cmp.js' 

export default{
    template: `
        <section class= "my-notes">
            <ul class="clean-list flex flex-wrap justify-content-center">
                <li v-for="note in notesToShow" :key="note.id">
                    <note-preview v-bind:note="note"
                    v-on:deleteNote="deleteNote"
                    v-on:setColor="setColor"
                    v-on:pinNote="pinNote"
                    >
                    </note-preview>
                </li>
            </ul>
        </section> 
        `,
    props:['notes'],
    components: {notePreview},
    methods:{
        deleteNote(id){
            this.$emit('deleteNote',id)            
        },
        setColor(id,color){
            this.$emit('setColor',id,color)
        },
        pinNote(id){
            this.$emit('pinNote',id)
        }
    },
    computed:{
        notesToShow(){return this.notes}
    }   
}