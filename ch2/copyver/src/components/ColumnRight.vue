<template>
  <div class="column-right">
      <h2 class="blind">로그인</h2>
      <area-login></area-login>
      <area-weather></area-weather>
      <area-subad></area-subad>
  </div>
</template>

<script>
import AreaLogin from './AreaLogin'
import AreaWeather from './AreaWeather'
import AreaSubad from './AreaSubad'
export default {
    components:{
        AreaLogin,
        AreaWeather,
        AreaSubad,
    }
}
</script>

<style>

</style>