<template>
  <div>
      <div class ="header-search">
            <h1>
                <a href= "https://www.naver.com">
                    <span class="naver-text">네이버</span>
                </a>
            </h1>
            <h2 class="blind">검색창</h2>
            <fieldset>
                <legend class='blind'>검색</legend>
                <input type="text" v-model="searchInput" v-on:keyup.enter="search(searchInput)"/>
                <button @click="search(searchInput)">
                    <span class='blind'>검색</span>
                    <span id="search-image"></span>
                </button>
            </fieldset>
        </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            searchInput : '',
        }
    },
    methods:{
        ...mapMutations(['search'])
    }
}
</script>

<style scoped>

</style>