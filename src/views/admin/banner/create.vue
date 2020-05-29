<template>
  <div class="list-box">
    <el-row><h2>Create Banner</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="Display" prop="state">
        <el-switch
          active-value="1"
          inactive-value="0"
          v-model="ruleForm.state"></el-switch>
      </el-form-item>
      <el-form-item label="Sort Num" prop="sort">
        <el-input type="number" v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item label="Image" prop="imageUrl">
        <Uploader :limitNum="1" @handSubmit="imgSubmit" @handRemove="imgRemove"></Uploader>
      </el-form-item>
      <el-form-item label="Introduction" prop="introduction">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
<!--        <el-input type="textarea"  v-model="ruleForm.content"></el-input>-->
        <Editor v-model="ruleForm.content" :height="300"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import Uploader from '@/components/Article/uploader/uploader'
  import Editor from '@/components/Article/Tinymce/index'
  import {addBanner} from "@/api/admin-banner";

  export default {
    name: "AdminBannerCreate",
    data() {
      return {
        ruleForm: {
          title: '',
          state: '1',
          introduction: '',
          content:'',
          imageUrl:'',
          sort:'',
        },
        rules: {
          title: [
            {required: true, message: 'Please input the title', trigger: 'blur'}
          ],
          imageUrl:[
            {required: true, message: 'Please select the image', trigger: 'blur'}
          ],
          sort: [
            {required: true, message: 'Please input the sort', trigger: 'blur'}
          ],
          introduction: [
            {required: true, message: 'Please input the introduction', trigger: 'blur'},
            {min: 0, max: 300, message: 'The length should be no more than 300 characters', trigger: 'blur'}
          ],
          content: [
            {required: true, message: 'Please input the content', trigger: 'blur'}
          ]
        },

      }
    },
    components:{
      Uploader,
      Editor
    },
    mounted() {

    },
    methods:{
      imgSubmit(path){
        this.ruleForm.imageUrl = path
      },
      imgRemove(){
        this.ruleForm.imageUrl = ''
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData=new FormData()
            formData.append('title',this.ruleForm.title)
            formData.append('imageUrl',this.ruleForm.imageUrl)
            formData.append('sort',this.ruleForm.sort)
            formData.append('state',this.ruleForm.state)
            formData.append('introduction',this.ruleForm.introduction)
            formData.append('content',this.ruleForm.content)

            addBanner(formData).then(res=>{
              if(res.code && res.code==200){
                this.$message({
                  message:'create successfully!',
                  type:'success'
                })
                this.$router.push({path:'/banner/list'})
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-box {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    h2 {
      padding: 10px 0;
      padding-bottom: 30px;
      font-size: 25px;
    }

    .miniImg {
      width: 100px;
      height: 100px;
    }

    .buttons {

      padding-bottom: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center
    }

    .pagination {
      padding: 30px 0;
    }
  }
</style>
