<style lang="less">

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
<template>
    <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in pic" :key="item.id">
            <div style="text-align: center;">
                <img :src="item.middle">
            </div>
        </el-carousel-item>
    </el-carousel>

</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        created (){
            this.$store.dispatch('GET_PIC');
        },
        computed: mapState({
            pic: state => state.laystall.pic.contentlist[0].list,
        })
    }
</script>