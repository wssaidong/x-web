<style lang="less" scoped>

</style>
<template>
	<el-container>
		<el-header>
			<vHeader></vHeader>
		</el-header>
		<el-main class="body">
			<div class="pic">
				<el-row :gutter="24">
					<el-col :sm="24" :md="24" :lg="16">

					</el-col>
					<el-col :sm="24" :md="24" :lg="8">

					</el-col>
				</el-row>
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