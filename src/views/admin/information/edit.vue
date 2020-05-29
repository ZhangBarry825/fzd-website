<template>
  <div class="list-box">
    <el-row><h2>Information</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="Phone" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input type="textarea" :autosize="{ minRows: 2}" v-model="ruleForm.address"></el-input>
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
  import Editor from '@/components/Article/Tinymce/index'
  import {addBanner, getBannerDetail, updateBanner} from "@/api/admin-banner";
  import {getAboutUs, updateAboutUs} from "@/api/admin-aboutUs";
  import {getInformation, updateInformation} from "@/api/admin-information";

  export default {
    name: "AdminInformation",
    data() {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error());
        } else {
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error());
          }
        }
      }
      return {
        baseImgUrl: this.$globalData.baseImgUrl,
        ruleForm: {
          id:'',
          phone: '',
          email: '',
          address: '',
        },
        rules: {
          phone: [
            {required: true, message: 'Please input the phone', trigger: 'blur'},
            { validator: checkPhone, message: 'Please check the phone', trigger: 'blur'}
          ],
          email:[
            {required: true, message: 'Please input the email', trigger: 'blur'},
            { type: 'email', message: 'Please check the email', trigger: 'blur'}
          ],
          address: [
            {required: true, message: 'Please input the address', trigger: 'blur'},
            {min: 0, max: 100, message: 'The length should be no more than 100 characters', trigger: 'blur'}
          ]
        },

      }
    },
    components:{
      Uploader,
      Editor
    },
    mounted() {
      this.fetchData()
    },
    methods:{
      imgSubmit(path){
        this.ruleForm.imageUrl = path
        console.log(path,'成功提交！')
      },
      imgRemove(){
        this.ruleForm.imageUrl = ''
        console.log('成功删除！')
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData=new FormData()
            formData.append('id',this.ruleForm.id)
            formData.append('phone',this.ruleForm.phone)
            formData.append('email',this.ruleForm.email)
            formData.append('address',this.ruleForm.address)

            updateInformation(formData).then(res=>{
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
      fetchData(){
        getInformation().then(res=>{
          console.log(res,864)
          this.ruleForm=res.data
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
