<script >
import Card from './Card.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },

    methods: {

    },

    components: {
        Card,
    },

    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {

            this.store.cards = res.data.data

            console.log(this.store.cards)
        })
    }

}
</script>

<template>
    <div class="container">
        <Card v-for="card in store.cards" :singleCard="card"></Card>
    </div>
</template>

<style lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-flow: row wrap;
    gap: 20px;

    color: black;

    padding: 50px 0;

}
</style>