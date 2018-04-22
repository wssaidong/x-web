<style lang="less" scoped>
	.el-header {
		background-color: #409EFF;
		color: #333;
		line-height: 60px;
	}
</style>
<template>

	<el-container >

		<el-header>
		</el-header>
		<el-container direction="horizontal">

			<el-main>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item>
						<el-input
							placeholder="文件码"
							prefix-icon="el-icon-search"
							v-model="fileCode">
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">寻找</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-main>
			<el-aside width="40%">
				<el-main>
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item>
							<el-input
									placeholder="文件码"
									prefix-icon="el-icon-search"
									v-model="fileCode">
							</el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">寻找</el-button>
							<el-button>取消</el-button>
						</el-form-item>
					</el-form>
				</el-main>
			</el-aside>
		</el-container>


	</el-container>
</template>
<script>
    import { mapState } from 'vuex'
    import ElMain from "element-ui/packages/main/src/main";
    export default {
        components: {ElMain},
        data() {
			return {

			}
		},
        created (){
            this.$store.dispatch('GET_TWEETS')
        },
        computed: mapState({ tweets: state => state.tweets.data.content }),
    }
</script>