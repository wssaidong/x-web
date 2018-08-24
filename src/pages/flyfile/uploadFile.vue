<style>
    .el-upload-list__item-name{
        text-align: left;
    }
</style>
<template>
    <el-container>
        <el-header title="首页">
            <vHeader></vHeader>
        </el-header>
        <el-main class="body">
            <div style="width: 50%;margin: 5% auto;text-align: center">
                <el-upload
                        ref="upload"
                        :limit="5"
                        :on-change="handleChange"
                        drag
                        action="http://api.laystall.top/x/api/file?dir=flyFile/tmp"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

                <div style="margin-top: 20px">
                    <el-button size="small" type="success" @click="submitUpload">生成文件码</el-button>
                </div>

                <div v-if="fileCode" style="margin-top: 10px">
                    <el-tag type="success">{{fileCode}}</el-tag>
                </div>
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
                fileChange:false,
            };
        },

        methods: {
            handleChange(file, fileList) {
                this.fileList = fileList;
                this.fileChange = true;
            },
            submitUpload() {
                if( this.fileList.length == 0){
                    return ;
                }
                if(!this.fileChange){
                    return ;
                }
                var data = this.fileList.map(item => {
                    return {fileName:item.response.fileName,url:item.response.url};
                })
                flyFileUpload({fileList:JSON.stringify(data)}).then(response => {
                    this.fileCode = response.data.code
                    this.fileChange = false;
                })
            },
        }
    }
</script>