<template>
    <div class="backtop">
        <img src="~assets/images/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    name:"BackTop"
}
</script>

<style scoped>
    .backtop{
        position: fixed;
        /* height: 30px; */
        bottom: 49px;
        right: 0;
        z-index: 99;
    }

    .backtop img{
        height: 50px;
    }
</style>