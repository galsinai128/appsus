export default {
    template:`
        <section class="note-actions flex space-between align-items-center">
            <button v-on:click.prevent="pinNote">{{pinText}}</button>
            <input type="color" 
                v-model="color" 
                v-on:click.stop=""
                v-on:change="setColor($event.target.value)">
            <button v-on:click.prevent="deleteNote">X</button>
        </section>
    `,
    methods:{
        deleteNote(){
            console.log('deleteing')
            this.$emit('deleteNote')
        },
        setColor(color){
            // console.log('seting color',color)
            this.$emit('setColor',color)
        },
        pinNote(){
            this.$emit('pinNote')
        }
    },
    props:['note'],
    data(){
        return {
            color:this.note.color,
            pin: 'pin'
        }
    },
    crreated(){

    },
    computed:{
        pinText(){
            if (this.note.isPinned) return 'unpin'
            else return 'pin'
        }
    }
}