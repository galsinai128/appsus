export default {
    template: `
        <section class= "search-note">
            search note:
            <input class= "search-note-input" 
                type="text" 
                v-model="search"
                v-on:keyup="filter">
        </section> 
        `,
    methods: {
        filter(){
            this.$emit('filter',this.search)
        }
    },
    data(){
        return{
            search : ''
        }
    }
}