<style lang="less">

    @media screen and(max-width:1024px){
        .el-upload-dragger{
            width: 100%;
        }
    }

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
                        list-type="picture"
                        :on-change="handleChange"
                        :on-preview="handlePreview"
                        drag
                        action="http://119.29.232.163:9999/x/api/biz/edp/file?dir=picku/tmp"
                        :file-list="fileList"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        metaInfo: {
            title: 'X-图床',
            meta: [{
                name: 'Keywords',
                content: '免费,图床,oss'
            }]
        },

        data() {
            return {
                fileList: [],
                fileCode: null,
                fileChange:false,
            };
        },

        methods: {
            handleChange(file, fileList) {
                if(file.response){
                    file.name = "http:" + file.response.url;
                    fileList[fileList.length-1] = file;
                }
                this.fileList =  fileList
            },
            handlePreview(file){
                this.$copyText(file.name);
                this.$message({
                    message: '已复制链接'
                });
            },
            submitUpload() {

            },
        }
    }
</script>