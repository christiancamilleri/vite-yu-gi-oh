import { reactive } from 'vue';

export const store = reactive({

    cards: [],
    showCards: false,
    showButton: true,
    showSearch: false,
    showCounter: false,

    APIcall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',

    cardName: "",
    typeOfCard: "",

});