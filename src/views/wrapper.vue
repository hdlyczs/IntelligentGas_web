<template>
  <el-container style="min-width:1349px;">
      <el-header>
          <div class="top-bar">
              <div class="top_logo">
                logo
              </div>
              <div class="nav_bar clearfix">
                  <div  class="nav_tab">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                      <el-menu-item index="1">处理中心</el-menu-item>
                      <el-menu-item index="2">处理中心</el-menu-item>
                      <el-menu-item index="3">处理中心</el-menu-item>
                      <el-menu-item index="4">处理中心</el-menu-item>
                    </el-menu>
                  </div>
              </div>
              <div class="operate">
                  <div class="operate_reserch">
                      <div class="upload">
                        <i class="el-icon-download"></i>
                      </div>
                      <div class="research">
                          <el-input placeholder="请输入关键字"
                                    class="w240"
                                    @keyup.enter.native="handleKey"
                                    v-model="keywords" :maxlength="30">
                            <el-button slot="append" @click="handleSearch"  icon="el-icon-search"></el-button>
                          </el-input>
                      </div>
                  </div>
                  <div class="operate_logout">
                    <p>
                      <img src="../assets/images/avatar.png" @click.stop="togglePop">
                      <span @click.stop="togglePop">{{userInfo.username}}
                                      <i class="dropdown-white"></i></span>
                    </p>
                    <transition name="slide-fade">
                      <div class="pop-up" v-show="showPop">
                        <a href="javascript:void(0);"><span class="logout" @click.stop="logout">退出</span></a>
                      </div>
                    </transition>
                  </div>

              </div>
          </div>
      </el-header>
      <el-container>
        <!-- <el-aside  class="menu-bar" width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']"  background-color="#eef1f6" text-color="#48576a"
              active-text-color="#20a0ff"> -->
        <!-- 为了点击刷新页面效果 @click.native="flushCom" -->
        <el-aside  class="menu-bar" width="206px" style="">
          <el-menu class="el_demo" default-active="12" @open="handleOpen" @close="handleClose" :default-active="this.$route.path.substr(1)" :default-openeds="openeds" :uniqueOpened="uniqueOpened" text-color="#666" active-text-color="#2f80e7">
            <!-- 暂时写死测试 -->
             <router-link to="index-management"><el-menu-item index="1"><i class="icon iconfont icon-shouye"></i>&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;</el-menu-item></router-link>
            <el-submenu index="1">
              <template slot="title"><i class="icon iconfont icon-renwuguanli-"></i>&nbsp;任务管理</template>
              <el-menu-item-group>
                <router-link to="newtask-management"><el-menu-item index="1-1">新建任务</el-menu-item></router-link>
                <router-link to="tasklist-management"><el-menu-item index="1-2">任务列表</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
            <router-link to="asset-management"><el-menu-item index="3"><i class="icon iconfont icon-zichan"></i>&nbsp;资产管理</el-menu-item></router-link>
            <router-link to="check-management"><el-menu-item index="4"><i class="icon iconfont icon-task"></i>&nbsp;检查报告</el-menu-item></router-link>
            <el-submenu index="2">
                <template slot="title"><i class="icon iconfont icon-xitong"></i>&nbsp;系统设置</template>
                <el-menu-item-group>
                    <router-link to="user-management"><el-menu-item index="2-1">用户管理</el-menu-item></router-link>
                                      <router-link to="log-management"><el-menu-item index="2-2">日志管理</el-menu-item></router-link>
                                      <router-link to="system-configuration"><el-menu-item index="2-3">网络配置</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
           <!-- <template v-for="item in this.menuList" :index="item.id">
              <router-link v-if="item.son.length<1" :to="item.url">
                <el-menu-item :index="'home/'+String(item.url)" @click="resetDefault(item.url)"><i :class="'icon iconfont iconColor '+item.icon"></i>&nbsp;{{item.name}}<span v-if="item.name=='首页'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </el-menu-item>
              </router-link>
              <el-submenu v-else  :index="String(item.id)">
                <template slot="title"><i :class="'icon iconfont iconColor '+item.icon"></i>&nbsp;{{item.name}}</template>
                <el-menu-item-group v-for="sonItem in item.son" :index="sonItem.id" :key="sonItem.id" class="barW">
                  <router-link :to="sonItem.url"><el-menu-item :index="'home/'+String(sonItem.url)" @click="resetUrl(sonItem.url)">&nbsp;<i :class="'icon iconfont iconColor '+sonItem.icon"></i>&nbsp;{{sonItem.name}}</el-menu-item></router-link>
                </el-menu-item-group>
              </el-submenu>
            </template>-->
          </el-menu>
        </el-aside>
        <el-main class="route-wrapper">
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
  export default {
      data() {
          return {
              showPop: false,
              openeds:['1'],//默认展开菜单"1"
              uniqueOpened:true,
              keywords:"",
              activeIndex:"1",
              //用户信息
              userInfo: {
                  username:'admin',
                  email:'',
                  tel:'',
                  realname:'',
                  unit:'',
                  role:{
                    description:''
                  }
                  // password:''
              },

          }
      },
      methods: {
          resetUrl(url){
            // localStorage.removeItem('urlkey');
            // localStorage.setItem('urlkey', JSON.stringify(url));
          },
          resetDefault(url){
            // this.$router.go(0);
            this.openeds = [];
            // localStorage.setItem('urlkey', JSON.stringify(url));
          },
          handleOpen(key, keyPath) {
            // console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            // console.log(key, keyPath);
          },
          // 搜索
          handleSearch() {
          },
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          // 切换popup显示和隐藏的方法
          togglePop(){
              this.showPop = !this.showPop;
              if (this.showPop) {
                // 显示popup后，在document上绑定事件，用来关闭用户信息的弹窗
                document.addEventListener("click", this.closePop, false);

              } else {
                // 隐藏popup后，在document上解除绑定事件
                document.removeEventListener("click", this.closePop, false);
              }
        },
        // 关闭popup的方法
        closePop(){
          this.showPop = false;
          // 隐藏popup后，在document上解除绑定事件
          document.removeEventListener("click", this.closePop, false);
        },

    },
    created(){
      //this.disconnect();//关闭websocket连接
      this.selectColor = this.$route.path.substr(1);
      // 进入wrapper组件后，立即获取并修改当前路由
      var pathArr = this.$route.path.split("/");

      if (pathArr[1] == "home") {
        this.nowPath = "/" + pathArr[1] + "/" + pathArr[2]; // 正则匹配一、二级路由
      } else {
        this.nowPath = "/" + pathArr[1]; // 正则只匹配一级路由
      }

    },
    mounted(){
      function fixStyles() {
        // 渲染完毕后，修改菜单的高度占满屏幕高度
        let bodyHeight = document.documentElement.clientHeight - 60; // 去除topbar的高度
        document.querySelector(".menu-bar").style.minHeight = bodyHeight + 'px';
        document.querySelector(".route-wrapper").style.minHeight = bodyHeight + 'px';

      }

      fixStyles();
      // 窗口大小变化时，重新计算各元素属性
      window.onresize = function () {
        fixStyles();
      }
      window.onunload = function (){
      }
      window.onbeforeunload = function (){

      }
    },
    watch: {
    }
  }
</script>
<style lang="scss" scoped="" type="text/css">
    .el-header, .el-footer {
        //background-color:#135ab6;
        width:100%;
        padding:0 !important;
        min-width:200px;
        position:fixed;
        z-index:10;
    }
  .top-bar {
      height: 60px;
      background-color:#135ab6;
      min-width:800px;
      /*此处要高于ui组件select下拉框的zindex*/
      //z-index: 2500;
      .top_logo{
          width:206px;
          height:100%;
          float:left;
          display: block;
          background: red;
          img{
            width:206px;
            height:100%;
          }
      }
      .nav_bar{
          float:left;
          .nav_tab{
              float:left;
              height:60px;
              background: #409eff;
          }
          .nav_reserch{
            float:right;

          }
      }
      .operate {
            float: right;
            margin-right: 60px;
            height:60px;
            line-height:60px;
            color:white;
          img,span{
            color:#000;
            cursor:pointer;
          }
          .operate_reserch{
              float:left;
              .upload{
                float:left;
                color:blue;
                font-size: 30px;
                margin-right:5px;
              }
              .research{
                float:left;
              }
          }
          .operate_logout{
              float:right;
              position: relative;
              height:60px;
              line-height:60px;
              color:white;
              .dropdown-white {
                display: inline-block;
                width: 10px;
                height: 10px;
                vertical-align: baseline;
                color:#000;
                background: url("../assets/images/dropdown-white.png") no-repeat center;
              }
              .user-btn {
                height: 26px;
                color: #fff;
                cursor: pointer;
              }

              .pop-up {
                    position: absolute;
                    top: 64px;
                    left: -82px;
                    width: 189px;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 5px;
                    z-index:1000;
                    border:1px #ccc solid;
                    color:#666;
                  a{
                    color:#666;
                  }
                  span{
                    display:block;
                    height: 30px;
                    line-height:30px;
                    font-size:15px;
                  }
                  a:hover span {
                    background-color:#ccc;
                    color:#fff;
                  }
                  .logout {
                    width: 100%;
                    margin:10px 0;
                    font-weight:bolder;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                  }
              }
              .pop-up:before {
                content: '';
                margin-top: -12px;
                margin-left: auto;
                margin-right: auto;
                display: block;
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-bottom: 6px solid #fff;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
              }
          }
      }
      .top-bar-content {
          margin-left: auto;
          margin-right: auto;

      }
  }
  .el-aside {
    background-color: #545c64;
  }

  .el-main {
    margin-top:60px;
    padding:0;
    /* background-color: #e9eef3; */
    background-color:#E6E6E6;
  }

  body > .el-container {
    margin-bottom: 40px;
    /* height:100%; */
    /* min-width:1366px; */
  }
  .menu-bar {
        z-index:10;
        position: fixed;
        top: 60px;
        border-left: 1px solid #ccc;
        /* background-color:#f5f7fa !important; */
        height:556px;
        width: 180px;
        /* @media screen and(max-width: 1439px) {
            width: 180px;
        }
        @media screen and(min-width: 1440px) {
            width: 250px;
            .barW{
              margin-left:30px;
            }
        } */
        background-color: #fff;
        border-right: 1px solid #ddd;
        overflow: auto;
      ul {
        overflow: auto;
        overflow-x: hidden;
      /*  background-color:#f5f7fa;
       li{
         background-color:#f5f7fa;
       } */
      .el-menu-item {
      .menu-icon {
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        width: 18px;
        height: 18px;
        background-position-x: -36px;
      }

      &.is-active .menu-icon {
         background-position-x: -92px;
       }
      .home {
        background-position-y: -34px;
      }
      .customer-management {
        background-position-y: -86px;
      }
      .product-management {
        background-position-y: -142px;
      }
      .redemption-loan {
        background-position-y: -198px;
      }
      .growth-fund {
        background-position-y: -254px;
      }
      .financial-management {
        background-position-y: -309px;
      }
      .investment-management {
        background-position-y: -361px;
      }
      }

      }

  }

  .route-wrapper {
    flex: 1;
    height:100%;
    padding-left:200px;
    /* @media screen and(max-width: 1439px) {
      padding-left: 200px;
    }
    @media screen and(min-width: 1440px) {
      padding-left: 249px;
    }*/
    box-sizing: border-box;
  }
  .router-wrapper-reset{
    height:100% ;
  }

</style>
