<script >
import { store } from '../store.js'
export default {

    data() {
        return {
            store,
        }
    },

    methods: {
        showCounter() {
            this.store.showCounter = true;
        }
    },

}
</script>

<template>
    <div id="search-bar">
        <input v-model="store.cardName" type="text" placeholder="Digita qui il nome della carta">
        <select name="status" id="status" v-model="store.typeOfCard">
            <option value=""></option>
            <option value="Normal monster">Normal monster</option>
            <option value="Flip Effect Monster">Flip Effect Monster</option>
            <option value="Effect Monster">Effect Monster</option>
            <option value="Union Effect Monster">Union Effect Monster</option>
            <option value="Link Monster">Link Monster</option>
            <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
            <option value="Spell card">Spell card</option>
            <option value="Trap Card">Trap Card</option>
        </select>

        <button @click="$emit('search'), showCounter()">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
#search-bar {
    display: flex;
    justify-content: center;
    gap: 10px;

    input {
        height: 2.5em;
        width: 30%;

        border-radius: 7px;
    }

    button {
        background-color: #e11773;
        color: #fed500;

        font-size: 1.2em;

        padding: 5px 10px;

        border: none;

        border-radius: 7px;
    }
}
</style>