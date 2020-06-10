<template>
  <div class="list-box">
    <el-row><h2>Classification Edit</h2></el-row>
    <el-button-group class="buttons">
      <el-button size="small" type="primary" icon="el-icon-edit" @click="goTo('/admin-class/create')">
        Create
      </el-button>
      <el-button size="small" type="primary" icon="el-icon-delete" @click="deleteItems"
                 style="border-top-right-radius: 4px;border-bottom-right-radius: 4px">Delete
      </el-button>
    </el-button-group>

    <el-table
      v-loading="loading"
      :data="productList"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="classifyName"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="Created Time">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.createTime |formatTime }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description">
      </el-table-column>
      <el-table-column
        prop="state"
        width="100"
        label="Display">
        <template slot-scope="scope">
          <el-switch
            @change="switchState(scope.row)"
            v-model="scope.row.state"
            active-value="1"
            inactive-value="0"
            active-color="#13ce66"
            inactive-color="gainsboro">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        width="250"
        label="Config">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small" plain>edit</el-button>
          <el-button @click="handleView(scope.row)" type="success" size="small" plain>list</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id])" size="small" plain>delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row class="pagination">
      <el-pagination
        background
        @current-change="pageChange"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalNum">
      </el-pagination>
    </el-row>





    <el-dialog title="Edit" :visible.sync="dialogFormVisible">
      <el-form :model="itemForm">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="itemForm.classifyName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth">
          <el-input v-model="itemForm.description" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateItem">Update</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {deleteBanner, updateBanner} from "@/api/admin-banner";
  import {deleteProduct, getProductList} from "@/api/admin-product";
  import {deleteClass, getChildClass, getClassList, updateClass} from "@/api/admin-classification";
  import {parseTime} from "@/utils";

  export default {
    name: "AdminClassEdit",
    data() {
      return {
        parentId:'',
        dialogFormVisible:false,
        itemForm:{
          id:'',
          classifyName:'',
          state:'',
          description:''
        },
        formLabelWidth: '120px',
        loading:false,
        baseImgUrl: this.$globalData.baseImgUrl,
        pageNum: 1,
        pageSize: 10,
        hasNext: false,
        totalNum: 0,
        multipleSelection:[],//多选内容
        productList: [],

      }
    },
    filters:{
      formatTime(e){
        return parseTime(e)
      }
    },
    methods: {
      updateItem(){

        let that = this
        this.loading=true
        let formData=new FormData()
        formData.append('id',this.itemForm.id)
        formData.append('description',this.itemForm.description)
        formData.append('classifyName',this.itemForm.classifyName)
        formData.append('state',this.itemForm.state)
        updateClass(formData).then(res=>{
          console.log(res,876)
          if(res.code && res.code === 200){
            that.loading=false
            that.fetchData()
          }
        })

        this.dialogFormVisible=false
      },
      goTo(path){
        this.$router.push({path:path})
      },
      deleteItems(){
        if(this.multipleSelection.length===0){
          return
        }
        let d=[]
        for (let i = 0; i <this.multipleSelection.length ; i++) {
          d.push(this.multipleSelection[i].id)
        }
        this.$confirm('This operation will permanently delete the data, continue?', 'Warn', {
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cance',
          type: 'warning'
        }).then(() => {
          let formData=new FormData()
          formData.append('ids',d)
          deleteClass(formData).then(res=>{
            if(res.code && res.code == 200){
              this.$message({
                type: 'success',
                message: 'Delete successfully!'
              });
              this.changePage(this.pageNum,true,this.multipleSelection.length)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancel'
          });
        });
      },
      handleDelete(id){
        this.$confirm('This operation will permanently delete the data, continue?', 'Warn', {
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cance',
          type: 'warning'
        }).then(() => {
          let formData=new FormData()
          formData.append('ids',id)
          deleteClass(formData).then(res=>{
            if(res.code && res.code == 200){
              this.$message({
                type: 'success',
                message: 'Delete successfully!'
              });

              this.changePage(this.pageNum,true,1)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'cancel'
          });
        });
      },
      switchState(data){
        let that = this
        this.loading=true
        console.log(data)
        let formData=new FormData()
        formData.append('id',data.id)
        formData.append('introduction',data.introduction)
        formData.append('sort',data.sort)
        formData.append('title',data.title)
        formData.append('content',data.content)
        formData.append('state',data.state)
        formData.append('imageUrl',data.imageUrl)
        updateClass(formData).then(res=>{
          console.log(res,876)
          if(res.code && res.code === 200){
            that.loading=false
          }
        })

      },
      pageChange(nowPage){
        this.fetchData(nowPage)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleClick(row) {
        // this.goTo('/admin-class/edit?id='+row.id)
        this.dialogFormVisible=true
        this.itemForm.id=row.id
        this.itemForm.state=row.state
        this.itemForm.classifyName=row.classifyName
        this.itemForm.description=row.description
        console.log(row);
      },
      handleView(row) {
        this.goTo('/admin-class/edit?id='+row.id)
        console.log(row);
      },
      changePage(currentPage, isDelete = false, deleteNum = 1) {
        if (isDelete) {
          let num = this.totalNum % this.pageSize
          console.log(this.totalNum, 'this.totalNum')
          console.log(this.pageSize, 'this.pageSize')
          console.log(num, 'num')
          if (num > deleteNum) {
            this.pageNum = currentPage
          } else {
            if (currentPage > 1) {
              this.pageNum = currentPage - 1
            } else {
              this.pageNum = currentPage
            }
          }
        } else {
          this.pageNum = currentPage
        }
        this.fetchData()
      },
      fetchData(page = this.pageNum) {
        this.loading=true
        getChildClass({
          pageNum: page,
          pageSize: this.pageSize,
          parentId:this.parentId
        }).then(res => {
          if (res.code && res.code === 200) {
            this.productList = res.data.list
            this.totalNum = res.data.total
            this.hasNext = res.data.hasNextPage
            this.totalNum=res.data.total
            this.pageNum=page
          }
          this.loading=false
        })
      }
    },
    mounted(e) {
      console.log(this.$route.query.id,852)
      this.parentId=this.$route.query.id
      this.fetchData()
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
    .miniImg{
      width: 100px;
      height: 100px;
    }

    .buttons {

      padding-bottom: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center
    }
    .pagination{
      padding: 30px 0;
    }
  }

</style>
