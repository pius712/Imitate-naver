<template>
    <nav>
        <div class="center-nav">
            <ul>
                <li>
                    <a href="">
                        <span></span>
                        <span class="blind">카페</span>
                    </a>
                </li> <!-- list item -->
                <li><a href=""><span></span><span class="blind">블로그</span></a></li> <!-- list item -->
                <li><a href=""><span></span><span class="blind">지식인</span></a></li> <!-- list item -->
                <li><a href=""><span></span><span class="blind">쇼핑</span></a></li> <!-- list item -->
                <li><a href=""><span></span><span class="blind">네이버페이</span></a></li> <!-- list item -->
                <li><a href=""><span></span><span class="blind">네이버쇼핑</span></a></li> <!-- list item -->
                <li><a href=""><span></span><span class="blind">네이버TV</span></a></li> <!-- list item -->
            </ul>
            <ul>
                <li v-for="(el, index) in listArr" :key="index">{{ el }}</li>
            </ul> 
            <div class="nav-divider"></div>
        </div>
    </nav>
</template>

<script>
export default {
    computed:{
        listArr(){
            return this.$store.state.navArr
        },
    }
}
</script>

<style>

</style>