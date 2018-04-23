<style>
    .el-header {
        background-color: #409EFF;
        color: #333;
        line-height: 60px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
<template>
    <el-container>
        <el-header title="首页">
            <router-link to="/flyfile">Home</router-link>
            <router-link to="/flyfile/upload">Upload</router-link>
        </el-header>
        <el-main>
            <el-row :gutter="24" justify="center">
                <el-col :lg="16" style="padding: 30px 30px" >
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-error="handleAvatarError"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-if="fileCode"  v-model="fileCode"/>
                </el-col>
                <el-col :lg="8" style="padding: 30px 30px">
                    <div style="height: 300px;">
                        <el-steps direction="vertical">
                            <el-step title="关注微信公众号"></el-step>
                            <el-step title="上传文件"></el-step>
                            <el-step title="获取文件码"></el-step>
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
                imageUrl: '',
                fileCode: null
            };
        },
        methods: {
            handleAvatarError(res, file) {
                this.$message.error('上传失败!');
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.$message.error('上传成功!');
            },
            beforeAvatarUpload(file) {
                return true;
            }
        }
    }
</script>