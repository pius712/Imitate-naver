<template>
  <div>
    <app-header>
    </app-header>
    <app-content>
    </app-content>
  </div>
</template>

<script>
// import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppContent from'./components/AppContent.vue';
export default {
    components:{
        'app-header': AppHeader,
        'app-content': AppContent,
    }

}
</script>

<style>

</style>
