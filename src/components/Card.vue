<script >
import { store } from '../store.js'
export default {

    data() {
        return {
            store,
        }
    },
    props: {
        singleCard: Object,
    },
}
</script>

<template>
    <div class="card" v-show="store.showCards">
        <img class="card-img" :src="singleCard.card_images[0].image_url">
        <div class="card-text">
            <span><b>NOME:</b></span> {{ singleCard.name }}<br>
            <span><b>TIPO:</b></span> {{ singleCard.type }} <br>
            <span><b>PREZZO ATTUALE:</b></span> {{ singleCard.card_prices[0].ebay_price }} €

        </div>
    </div>
</template>

<style lang="scss">
.card {
    width: calc(100% / 5 - 20px / 5 * 4);


    .card-img {
        width: 220px;
    }

    .card-text {
        padding: 10px;

        max-width: 200px;



        background-color: #393a3d92;


        color: #ffd501;

        span {
            color: black;
        }


    }
}
</style>