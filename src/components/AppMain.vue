<script >
import Card from './Card.vue';
import SearchCard from './SearchCard.vue'
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },

    methods: {
        searchBar() {
            console.log(this.store.APIcall + "&fname=" + this.store.cardName)

            let newAPI = this.store.APIcall + '&fname=' + this.store.cardName

            console.log(newAPI);

            if (this.store.typeOfCard != "") {
                newAPI += `&type=${this.store.typeOfCard}`
            }



            if (this.store.cardName != "" || this.store.typeOfCard != "") {

                axios.get(newAPI).then((res) => {
                    console.log(res.data.data)

                    this.store.cards = res.data.data
                })

            } else {
                alert("inserisci il nome di una carta")
            }

            this.store.cardName = ""

        },
    },

    components: {
        Card,
        SearchCard,
    },

    created() {
        axios.get(this.store.APIcall).then((res) => {

            this.store.cards = res.data.data

            console.log(this.store.cards)
        })
    }
}
</script>

<template>
    <div>
        <SearchCard v-show="store.showSearch" @search="searchBar()"></SearchCard>
        <div v-show="store.showCounter" id="counter">
            <span>Numero carte trovate: <b>{{ this.store.cards.length }}</b></span>
        </div>
    </div>

    <div class="container">
        <Card v-for="card in store.cards" :singleCard="card"></Card>
    </div>
</template>

<style lang="scss">
#counter {
    color: black;

    display: flex;
    justify-content: center;
}

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