import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        navArr : ['사전','뉴스','증권','부동산','지도','영화','뮤직','책','웹툰'],
    },
    mutations:{
        search(state, inputData){
            alert(inputData);
        }
    } 
})
