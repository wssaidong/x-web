<style>

</style>
<template>
    <el-container>
        <el-header title="首页">
            <vHeader></vHeader>
        </el-header>
        <el-main class="body">
            <el-upload
                    ref="upload"
                    :limit="1"
                    :on-change="handleChange"
                    drag
                    action="http://api.laystall.top/x/api/file"

                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>

            <el-button size="small" type="success" @click="submitUpload">生成文件码</el-button>

            <div v-if="fileCode" style="margin-left: 10px">
                {{fileCode}}
            </div>
        </el-main>
    </el-container>
</template>
<script>
    import { flyFileUpload } from '../../api/laystall'
    export default {
        data() {
            return {
                fileList: [],
                fileCode: null,
            };
        },

        methods: {
            handleChange(file, fileList) {
                this.fileList = fileList;
            },
            submitUpload() {
                var data = this.fileList.map(item => {
                    return {fileName:item.response.fileName,url:item.response.url};
                })
                flyFileUpload({fileList:JSON.stringify(data)}).then(response => {
                    this.fileCode = response.data.code
                })
            },
        }
    }
</script>