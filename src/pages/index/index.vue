<style lang="less" scoped>

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
	<el-container>
		<el-header>
			<vHeader></vHeader>
		</el-header>
		<el-main class="body">
			<div>
				<vCarousel></vCarousel>
			</div>
			<div class="news">
				<el-row :gutter="24">
					<el-col :sm="24" :md="24" :lg="16">
						<div class="left">
							<div v-for="item in articles" >
								<div style="margin-bottom: 10px">
									<el-card :body-style="{ padding: '5px' }">
										<div style="float: left;margin-right: 10px">
											<img :src="item.contentImg" class="image" style="height:140px;width: 220px">
										</div>
										<div>
											<div class="title" style="padding-bottom: 10px">
												<a :href="item.url" target="_blank"><h3>{{item.title}}</h3></a>
											</div>
											<div class="content" style="padding-bottom: 10px">
												<span>{{item.title}}</span>
											</div>
											<div class="author" style="padding-bottom: 10px">
												{{item.userName}}
											</div>
										</div>
									</el-card>
								</div>
							</div>
						</div>
					</el-col>
					<el-col :sm="24" :md="24" :lg="8">
						<div class="right">
							<div style="margin-bottom: 15px">
								<video class="video" style="width: 100%;"
									   src="https://gslb.miaopai.com/stream/BSXLCSQQI2BUG~iKa4-06doycsELXxsCXfOSvQ__.mp4" poster="http://imgaliyuncdn.miaopai.com/images/BSXLCSQQI2BUG~iKa4-06doycsELXxsCXfOSvQ___qncd.jpg"
									   controls="controls">
									您的浏览器不支持播放。
								</video>
							</div>
							<div>
								<el-form>
									<el-form-item label="内容收集器:">
										<el-input type="textarea" ></el-input>
									</el-form-item>
									<el-form-item>
										<el-button type="primary">立即发布</el-button>
									</el-form-item>
								</el-form>
							</div>
							<div v-for="item in tweets" >
								<div style="margin-bottom: 10px;">
									<el-card :body-style="{ padding: '0px 5px'}">
										<div style="padding-top: 15px; float: left; height: 60px; width: 60px">
											<img :src="item.portrait" class="image">
										</div>
										<div style="padding: 15px;">
											<div>
												<span>{{ item.body }}</span>
											</div>
											<div class="bottom clearfix" style="margin-top: 5px">
												<time class="time">{{ item.pubDate }}</time>
											</div>
										</div>
									</el-card>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="link">

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
			this.$store.dispatch('GET_TWEETS');
            this.$store.dispatch('GET_ARTICLES');
        },
        computed: mapState({tweets: state => state.tweets.data.content,articles: state => state.laystall.data.contentlist})
    }
</script>