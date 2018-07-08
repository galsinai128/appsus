// import {eventBus, EVENT_SAVE_NOTE} from '../../services/eventbus-service.js'

export default {
    template: `
        <section class= "note-save-buttons">
        <router-link :to="'/keeper'" class="clean-link">
            <button v-on:click="saveChanges">save</button>
        </router-link>
        <router-link :to="'/keeper'" class="clean-link">
            <button>X</button>
        </router-link>
        </section> 
        `,
    methods: {
        saveChanges() {
            // eventBus.$emit(EVENT_SAVE_NOTE)
            this.$emit('saveNote')
        }
    }
}