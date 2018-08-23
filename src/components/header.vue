<style lang="less">

	@media screen and(min-width:1024px){
		.header{
			width: 1500px;
			margin: 0 auto;
		}
		.body{
			width: 1500px;
			margin: 0 auto;
		}
	}

	.el-header {
		background-color: #409EFF;
		color: #333;
		line-height: 60px;
	}

	A{

		text-decoration: none;
	}
	A:link{
		color: black
	}
	A:visited{
		color: black
	}

	.clearfix {
		overflow: auto;
	}

	.container {
		display: -webkit-flex;
		display: flex;
	}
</style>
<template>
	<div class="header">
		<el-menu :default-active="$route.path" router mode="horizontal" @select="handleSelect"  text-color="#fdfdfd" active-text-color="#fdfdfd" background-color="#409EFF">
			<el-menu-item index="1"><a href="http://api.laystall.top/x/auth/osc/grant"><i class="el-icon-menu"></i></a></el-menu-item>
			<el-menu-item index="/">首页</el-menu-item>
			<el-menu-item index="/pic">趣图</el-menu-item>
			<el-menu-item index="/flyfile">文件</el-menu-item>
			<el-menu-item index="/flyfile/upload">上传</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>