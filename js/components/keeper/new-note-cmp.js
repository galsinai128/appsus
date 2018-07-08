export default {
    template: `
        <section class= "new-note flex flex-dir-col justify-content-center align-items-center">
            <div class="new-note-title"> new note:</div>
            <input type="text" class="new-note-input" v-model="content">
            <div class="new-note-btns-container flex space-between align-items-center">
                <button v-on:click="newNote">save</button>
                <input type="color" 
                v-model="color" 
                v-on:click.stop=""
                v-on:change="setColor($event.target.value)">
                <button>X</button>
            </div>
        </section> 
        `,
    data() {
        return {
            content: '',
            color: 'rgba(255, 255, 255, 0.623)'
        }
    },
    methods:{
        newNote(){
            console.log('adding')
            this.$emit('addNote',this.content,this.color)
            this.content = '';
        },
        setColor(color){
            this.color = color;
        }
    }
}