<style lang="less" scoped>

</style>

<template>

	<el-container >
		<el-header>
			<vHeader></vHeader>
		</el-header>
		<el-main class="body">
			<el-form :model="form" :rules="rules" ref="form">
				<el-form-item prop="fileCode">
					<el-input
							placeholder="文件码"
							prefix-icon="el-icon-search"
							v-model="form.code">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit('form')" icon="el-icon-search">搜索</el-button>
					<el-button @click="resetForm('form')">重置</el-button>
					<div v-if="flyfile" v-for="item in flyfile.fileList">
						<a  v-bind:href="item.url" download="file" style="margin-left: 10px">
							<el-button type="info" icon="el-icon-message" >{{item.fileName}}</el-button>
						</a>
					</div>

				</el-form-item>
			</el-form>
		</el-main>
	</el-container>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                form: {
                    code: null,
                },
                rules: {
                    code: [
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

                        this.$store.dispatch('GET_FILE',this.form)
					}else{
                        return false
					}
				})

            },
            resetForm(formName) {
                this.$store.dispatch('CLEAR_FILE')
                this.$refs[formName].resetFields();

            },

        }
    }
</script>