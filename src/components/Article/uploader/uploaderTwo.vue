<template>
    <div class="uploader">
      <el-upload
        class="upload-demo"
        action="#"
        :http-request="uploadRequest"

        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="backImgs"
        list-type="picture">
        <el-button size="small" type="primary">upload</el-button>
        <div slot="tip" class="el-upload__tip">You can only upload jpg/png,and no more than 2MB</div>
      </el-upload>
    </div>
</template>

<script>
    import {uploadFile} from "@/api/admin-banner";

    export default {
        name: "Uploader",
      data(){
          return{
            fileList:[],
            dialogImageUrl: '',
            dialogVisible: false,
            ifHidden:false,
          }
      },
      props:{
        limitNum:{
          default:1,
          type:Number
        },
        backImg:{
          default:'',
          type:String
        },
        backImgs:{
          default:()=>{
            return []
          },
          type:Array
        },
      },
      methods:{
        uploadRequest(params) {
          //console.log(this.backImgs,9900)
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
              this.ifHidden=true
            }
          }).catch(() => {

          })
        },
        handleRemove(file, fileList) {
          //console.log(123123)
          //console.log(file, fileList);
          this.$emit('handRemove')
        },
        handlePictureCardPreview(file) {
          //console.log(file.url)
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
      }
    }
</script>

<style scoped lang="scss">
.uploader{
  .hidden{
    background: none !important;
  }
  .img{
    /*position: absolute;*/
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

</style>
