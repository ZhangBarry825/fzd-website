<template>
  <div class="list-box">
    <el-row><h2>News List</h2></el-row>
    <el-button-group class="buttons">
      <el-button size="small" type="primary" icon="el-icon-edit" @click="goTo('/admin-news/create')">
        Create
      </el-button>
      <el-button size="small" type="primary" icon="el-icon-delete" @click="deleteItems"
                 style="border-top-right-radius: 4px;border-bottom-right-radius: 4px">Delete
      </el-button>
    </el-button-group>

    <el-table
      v-loading="loading"
      :data="dataList"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="Create Time">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.createTime |formatTime}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        width="200"
        prop="email"
        label="email">
      </el-table-column>
      <el-table-column
        width="200"
        prop="phone"
        label="phone">
      </el-table-column>
      <el-table-column
        width="200"
        prop="message"
        label="message">
      </el-table-column>
      <el-table-column
        width="160"
        label="Config">
        <template slot-scope="scope">
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
  </div>
</template>

<script>
  import {parseTime} from "@/utils/index";
  import {deleteMessage, getMessageList} from "@/api/admin-message";

  export default {
    name: "AdminMsgList",
    data() {
      return {
        loading:false,
        baseImgUrl: this.$globalData.baseImgUrl,
        pageNum: 1,
        pageSize: 10,
        hasNext: false,
        totalNum: 0,
        multipleSelection:[],//多选内容
        dataList: []
      }
    },
    filters:{
      formatTime(e){
        return parseTime(e)
      }
    },
    methods: {
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
          deleteMessage(formData).then(res=>{
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
          deleteMessage(formData).then(res=>{
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
      pageChange(nowPage){
        this.fetchData(nowPage)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleClick(row) {
        this.goTo('/admin-news/edit?id='+row.id)
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
        getMessageList({
          pageNum: page,
          pageSize: this.pageSize,
        }).then(res => {
          if (res.code && res.code === 200) {
            this.dataList = res.data.list
            this.totalNum = res.data.total
            this.hasNext = res.data.hasNextPage
            this.totalNum=res.data.total
            this.pageNum=page
          }
          this.loading=false
        })
      }
    },
    mounted() {
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
