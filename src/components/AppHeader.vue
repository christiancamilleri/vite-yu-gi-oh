<script >
import { store } from '../store'
export default {

    data() {
        return {
            store,
        }
    },
    methods: {
        showCards() {
            this.store.showCards = true;
            this.store.showButton = false;
            this.store.showSearch = true;
        },

    }
}
</script>

<template>
    <header>
        <h1>Benvenuto nel mio portale di yu-gi-oh</h1>

        <div id="btn" v-show="store.showButton" @click="showCards()">
            <button><b>clicca qui per vedere le mie carte</b></button>
        </div>
    </header>
</template>

<style lang="scss">
header {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #e11773;
        text-transform: uppercase;
    }

    #btn {
        button {
            padding: 1em;
            color: #e11773;

            background-color: #efe682;
            border: none;
            border-radius: 10px;

            text-transform: uppercase;
            font-size: 1.2em;

            cursor: pointer;
        }

        button:hover {
            background-color: #efe68210;
            color: #efe682;
        }
    }
}
</style>
