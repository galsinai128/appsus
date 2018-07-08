import notesService from '../../services/appsus-services.js'
import noteActions from './note-actions-cmp.js'


export default {
    template:`
        <section class="note-preview">
            <router-link :to="'/keeper/'+note.id" class="clean-link">
                <div class="note-preview-item flex flex-dir-col align-items-center space-between"
                    v-bind:style="{background: note.color}">
                    {{note.content}}
                    <note-actions 
                        v-on:deleteNote="deleteNote"
                        v-on:setColor="setColor"
                        v-on:pinNote="pinNote"
                        v-bind:note="note">
                    </note-actions>
                </div>
            </router-link>
        </section>
    `,
    props:['note'],
    data(){
        return {
            isShown: false
        }
    },
    components:{noteActions},
    methods:{
        deleteNote(){
            this.$emit('deleteNote',this._props.note.id)
        },
        setColor(color){
            this.$emit('setColor',this._props.note.id,color)
        },
        pinNote(){
            this.$emit('pinNote',this._props.note.id)
        }
    },
    computed:{
        // color(){return this.note.color}
    }
}