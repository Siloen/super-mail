<template>
    <div class="recommend">
        <div v-for="(item,index) in recommed" :key="index" class="recommend_item">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title">
                <div>{{item.title}}</div> 
            </a>
        </div>
    </div>   
</template>

<script>
export default {
    props:{
        recommed:{
            type:Array
        }
    }
}
</script>
<style>
    .recommend{
        display: flex;
    }
    .recommend_item{
        flex: 1;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 30px;
        border-bottom: 8px solid #eee;
    }

    .recommend_item img{
        height: 70px;
        width: 70px;
    }
    
</style>