<template>
    <div class="container">
        <column-left></column-left>
        <column-right></column-right>
        <column-bottom></column-bottom>
        <column-banner></column-banner>
    </div>
</template>

<script>
import ColumnLeft from './ColumnLeft';
import ColumnRight from './ColumnRight';
import ColumnBottom from './ColumnBottom';
import ColumnBanner from './ColumnBanner';
export default {

    components: {
        ColumnLeft,
        ColumnRight,
        ColumnBottom,
        ColumnBanner,
    }
}

</script>

<style>

</style>