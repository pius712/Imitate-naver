<template>
    <div class="header_center">
        <logo></logo>
        <link-area></link-area>
        <search></search>
    </div>
</template>

<script>
import Logo from './Logo.vue';
import LinkArea from './Link.vue';
import Search from './Search.vue'
export default {
    components:{
        'logo': Logo,
        'link-area': LinkArea,
        'search' :Search
    }
}
</script>

<style>

</style>
