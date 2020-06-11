<template>
  <div class="list-box">
    <el-row><h2>Edit Product</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="Name" prop="productName">
        <el-input v-model="ruleForm.productName"></el-input>
      </el-form-item>
      <el-form-item label="Display" prop="state">
        <el-switch
          active-value="1"
          inactive-value="0"
          v-model="ruleForm.state"></el-switch>
      </el-form-item>
      <el-form-item label="Category" prop="classifyId">
        <el-select v-model="ruleForm.classifyId" placeholder="Please select">
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.classifyName"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Sort Num" prop="sort">
        <el-input type="number" v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item label="Image" prop="imageUrlList">
        <!--        <Uploader :backImg="baseImgUrl+ruleForm.imageUrlList[0].imageUrl" :limitNum="5" @handSubmit="imgSubmit" @handRemove="imgRemove"></Uploader>-->
        <UploaderTwo :backImgs="imageUrlList" :limitNum="5" @handSubmit="imgSubmit"
                     @handRemove="imgRemove"></UploaderTwo>
      </el-form-item>
      <el-form-item label="Introduction" prop="introduction">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.introduction"></el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <Editor v-model="ruleForm.content" :height="300"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Update</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import Uploader from '@/components/Article/uploader/uploader'
  import UploaderTwo from '@/components/Article/uploader/uploaderTwo'
  import Editor from '@/components/Article/Tinymce/index'
  import {addBanner, getBannerDetail, updateBanner} from "@/api/admin-banner";
  import {getProduct, updateProduct} from "@/api/admin-product";
  import {getAllChild} from "@/api/admin-classification";

  export default {
    name: "AdminProductEdit",
    data() {
      return {
        categoryList: [],
        baseImgUrl: this.$globalData.baseImgUrl,
        imageUrlList: [],
        id: '',
        ruleForm: {
          imageUrlList: [{}],
          productName: '',
          state: '1',
          introduction: '',
          content: '',
          imageUrl: '',
          sort: '',
          classifyId: ''
        },
        rules: {
          productName: [
            {required: true, message: 'Please input the name', trigger: 'blur'}
          ],
          imageUrlList: [
            {required: true, message: 'Please select the image', trigger: 'blur'}
          ],
          classifyId: [
            {required: true, message: 'Please select the category', trigger: 'blur'}
          ],
          sort: [
            {required: true, message: 'Please input the sort', trigger: 'blur'},
            {min: 0, max: 6, message: 'The number of sort should be smaller than 999999', trigger: 'blur'}
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
    components: {
      Uploader,
      Editor,
      UploaderTwo
    },
    mounted() {
      this.id = this.$route.query.id
      this.fetchData()
    },
    methods: {
      imgSubmit(path) {
        this.ruleForm.imageUrlList.push(path)
        //console.log(path, '成功提交！')
      },
      imgRemove() {
        this.ruleForm.imageUrlList=[]
        this.imageUrlList=[]
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData()
            formData.append('id', this.ruleForm.id)
            formData.append('productName', this.ruleForm.productName)
            formData.append('imagesUrl', this.ruleForm.imageUrlList)
            formData.append('sort', this.ruleForm.sort)
            formData.append('state', this.ruleForm.state)
            formData.append('introduction', this.ruleForm.introduction)
            formData.append('content', this.ruleForm.content)

            //console.log(this.ruleForm)
            updateProduct(formData).then(res=>{
              if(res.code && res.code==200){
                this.$message({
                  message:'update successfully!',
                  type:'success'
                })
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
      },
      fetchData() {
        getProduct({
          id: this.id
        }).then(res => {
          //console.log(res, 864)
          this.ruleForm = res.data
          let imageUrlList = []
          let images = []
          for (let i = 0; i < this.ruleForm.imageUrlList.length; i++) {
            images[i]= this.ruleForm.imageUrlList[i].imageUrl
            imageUrlList[i] = {
              url: this.baseImgUrl + this.ruleForm.imageUrlList[i].imageUrl
            }
          }
          this.ruleForm.imageUrlList=images
          this.imageUrlList = imageUrlList
          //console.log(this.imageUrlList, 987)
        })

        getAllChild({}).then(res => {
          //console.log(res, 1)
          if (res.code && res.code === 200) {
            this.categoryList = res.data
          }
          this.loading = false
        })
      }
    },
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
