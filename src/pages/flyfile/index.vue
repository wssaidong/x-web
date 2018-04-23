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
			<router-link to="/flyfile">Home</router-link>
			<router-link to="/flyfile/upload">Upload</router-link>
		</el-header>
		<el-main>
			<el-row :gutter="24" justify="center">
				<el-col :lg="16" style="padding: 30px 30px" >
					<el-form :model="form" :rules="rules" ref="form">
						<el-form-item prop="fileCode">
							<el-input
								placeholder="文件码"
								prefix-icon="el-icon-search"
								v-model="form.fileCode">
							</el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit('form')" icon="el-icon-search">搜索</el-button>
							<el-button @click="resetForm('form')">重置</el-button>
								<a v-if="flyfile.path" v-bind:href="flyfile.path" download="file" style="margin-left: 10px">
									<el-button type="info" icon="el-icon-message" >下载文件</el-button>
								</a>
						</el-form-item>
					</el-form>
				</el-col>
				<el-col :lg="8" style="padding: 30px 30px">
					<div style="height: 300px;">
						<el-steps direction="vertical">
							<el-step title="输入文件码"></el-step>
							<el-step title="点击搜索"></el-step>
						</el-steps>
					</div>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                form: {
                    fileCode: null,
                },
                rules: {
                    fileCode: [
                        { required: true, message: '请输入文件码', trigger: 'blur' },
                        { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
                    ],
                }
            }
		},

        computed: mapState({ flyfile: state => state.flyfile.flyfile }),
        methods: {
            onSubmit(formName) {

                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!');

                        this.$store.dispatch('GET_FILE')
					}else{
                        return false
					}
				})

            },
            resetForm(formName) {
                console.log('reset')
                this.$store.dispatch('CLEAR_FILE')
                this.$refs[formName].resetFields();

            },

        }
    }
</script>