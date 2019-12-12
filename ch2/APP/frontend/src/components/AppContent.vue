<template>
    <div class="container">
        <column-left>?</column-left>
        <column-right></column-right>
    </div>
</template>

<script>
import ColumnLeft from './ColumnLeft.vue';
import ColumnRight from './ColumnRight.vue';
export default {
    components:{
        'column-right' :ColumnRight,
        'column-left' :ColumnLeft
    }
}
</script>

<style>

</style>
