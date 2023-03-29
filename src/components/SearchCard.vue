<script >
import { store } from '../store.js'
export default {

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div id="search-bar">
        <input v-model="store.cardName" type="text" placeholder="Digita qui il nome della carta">
        <button @click="$emit('search')">Cerca</button>
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