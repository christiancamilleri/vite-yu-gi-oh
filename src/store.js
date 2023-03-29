import { reactive } from 'vue';

export const store = reactive({

    cards: [],
    showCards: false,
    showButton: true,
    showSearch: false,

    APIcall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',

    cardName: "",

});