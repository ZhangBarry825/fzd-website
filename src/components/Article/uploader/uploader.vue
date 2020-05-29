<template>
    <div class="uploader">
      <el-upload
        action="#"
        :http-request="uploadRequest"
        list-type="picture-card"
        :limit="limitNum"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
</template>

<script>
    import {uploadFile} from "@/api/admin-banner";

    export default {
        name: "Uploader",
      data(){
          return{
            dialogImageUrl: '',
            dialogVisible: false
          }
      },
      props:{
        limitNum:{
          default:1,
          type:Number
        },
      },
      methods:{
        uploadRequest(params) {
          let that = this
          const file = params.file,
            fileType = file.type,
            isImage = fileType.indexOf("image") != -1,
            isLt2M = file.size / 1024 / 1024 < 2;
          // 这里常规检验，看项目需求而定
          if (!isImage) {
            this.$message.error("You can only select png,jpg and gif!");
            return;
          }
          if (!isLt2M) {
            this.$message.error("The size of the file must less than 2M");
            return;
          }
          // 根据后台需求数据格式
          const form = new FormData();
          // 文件对象
          form.append("file", file);
          uploadFile(form).then(res => {
            if (res.data || res.code == 200) {
              this.$emit('handSubmit',res.data[0])
            }
          }).catch(() => {

          })
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
          this.$emit('handRemove')
        },
        handlePictureCardPreview(file) {
          console.log(file.url)
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
      }
    }
</script>

<style scoped lang="scss">
.uploader{
  display: flex;
  .img{
    width: 150px;
    height: 150px;
  }
}

</style>
