<style lang="less" scoped>

</style>

<template>

	<el-container >
		<el-header>
			<vHeader></vHeader>
		</el-header>
		<el-main class="body">
			<div style="width: 50%;margin: 15% auto">
				<el-form :model="form" :rules="rules" ref="form">
					<el-form-item prop="code">
						<el-input
								placeholder="文件码"
								v-model="form.code">
							<el-button slot="append" icon="el-icon-search" @click="onSubmit('form')"></el-button>
						</el-input>
					</el-form-item>
				</el-form>
				<div>
					<el-table
							:data="flyfile.fileList"
							style="width: 100%">
						<el-table-column
								prop="fileName"
								label="文件名"
								width="180"
						>
						</el-table-column>
						<el-table-column
								prop="url"
								label="地址">
						</el-table-column>

						<el-table-column label="操作" width="100">
							<template slot-scope="scope">
								<el-button size="mini">
									<a :href="scope.row.url" target= _blank>下载</a>
								</el-button>

							</template>
						</el-table-column>
					</el-table>

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
                form: {
                    code: null,
                },
                rules: {
                    code: [
                        { required: true, message: '请输入文件码', trigger: 'blur' },
                        //{ min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
                    ],
                }
            }
		},

        computed: mapState({ flyfile: state => state.flyfile.flyfile }),
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('GET_FILE',this.form)
					}else{
                        return false
					}
				})

            }
        }
    }
</script>