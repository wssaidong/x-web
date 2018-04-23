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
			<a href="http://api.laystall.top/x/auth/osc/grant"><i class="el-icon-menu"></i></a>
		</el-header>
		<el-main>
			<div style="margin-bottom: 1rem">
				<el-alert
						title="这是一个充满垃圾的网站，也许你可以在这里挖到宝藏，但是我真的不知道该做点什么功能进来，所以我会在这里不断填充垃圾"
						type="error"
						:closable="false">
				</el-alert>
			</div>
			<div v-for="item in tweets" >
				<div style="margin-bottom: 10px">
					<el-card :body-style="{ padding: '0px'}">
						<div style="padding: 14px;">
							<span>{{ item.body }}</span>
							<div class="bottom clearfix" style="margin-top: 5px">
								<time class="time">{{ item.pubDate }}</time>
								<span>{{ item.author }}</span>
							</div>
						</div>
					</el-card>
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
            this.$store.dispatch('GET_TWEETS')
        },
        computed: mapState({ tweets: state => state.tweets.data.content }),
    }
</script>