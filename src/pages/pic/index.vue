<style lang="less" scoped>

	@media screen and(min-width:1024px) and(max-width:1500px){
		.banner{
			width: 1520px;
		}
	}

	.banner{
		border-top: solid;border-top-width: 1px;border-top-color: white;
	}

	img {
		width: 100%;
		height: 100%;
	}
	.box{
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
	}
	.pic-item{
		width: 280px;height: 280px;
		margin: 5px 5px;
	}
</style>
<template>
	<el-container>
		<el-header>
			<vHeader></vHeader>
		</el-header>
		<div class="banner">
			<img src="http://meisupic.oss-cn-beijing.aliyuncs.com/topic/3f33fe7a-d35c-4e20-bc7a-5dfcb9afff04.jpg"/>
		</div>
		<el-main class="body">
			<div class="box">
				<div v-for="item in pic">
					<div class="pic-item"  v-for="i in item.list">
						<img :src="i.middle"/>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
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
            pic: state => state.laystall.pic.contentlist,
        })
    }
</script>