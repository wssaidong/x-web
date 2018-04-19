<style lang="less" scoped>
	.el-header {
		background-color: #409EFF;
		color: #333;
		line-height: 60px;
	}
</style>
<template>
	<el-container>
		<el-header title="首页">
			<i class="el-icon-menu"></i>
		</el-header>
		<el-main>

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
        computed: mapState({ user: state => state.user }),
    }
</script>