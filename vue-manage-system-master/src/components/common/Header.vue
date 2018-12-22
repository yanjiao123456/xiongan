<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/PeiDianJianCe/LOGO.png" alt="">

        </div>
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i class="icon-catalogue"></i>
        </div>

        <div class="title">
            金风智慧能效平台
        </div>
        
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div> -->
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="icon-notice"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message">1</span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator"><img src="static/img/img.jpg"></div>
                <!-- 用户名下拉菜单 -->
                <div class="user-name">
                    <span class="el-dropdown-link">
                        {{username}}
                    </span>
                    <!-- <el-dropdown-menu slot="dropdown">
                        <a href="http://blog.gdfengshuo.com/about/" target="_blank">
                            <el-dropdown-item>关于作者</el-dropdown-item>
                        </a>
                        <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                            <el-dropdown-item>项目仓库</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu> -->
                </div>
                <div class="set">
                    <i class="icon-set"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: "linxin",
      message: 2
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  font-size: 22px;
  color: #fff;
  .icon-catalogue {
    display: inline-block;
    width: 19px;
    height: 15px;
    line-height: 80px;
    background: url(../../assets/PeiDianJianCe/目录.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-notice {
    display: inline-block;
    width: 24px;
    height: 28px;
    line-height: 80px;
    background: url(../../assets/PeiDianJianCe/icon_bj.png) no-repeat;
    background-size: 100% 100%;
  }
  .icon-set {
    display: inline-block;
    width: 27px;
    height: 27px;
    line-height: 80px;
    background: url(../../assets/PeiDianJianCe/icon_sz.png) no-repeat;
    background-size: 100% 100%;
  }
  .title {
    float: left;
    height: 80px;
    line-height: 80px;
    width: 189px;
    height: 23px;
    font-size: 22px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: rgba(247, 247, 247, 1);
  }
  .set {
    margin-left: 27px;
  }
}
.collapse-btn {
  float: left;
  padding: 0 14px;
  cursor: pointer;
  line-height: 80px;
}
.header .logo {
  float: left;
  width: 230px;
  line-height: 80px;
}
.header-right {
  float: right;
  padding-right: 26px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  left: 14px;
  top: -2px;
  width: 27px;
  height: 15px;
  line-height: 15px;
  background: rgba(252, 81, 53, 1);
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-family: MicrosoftYaHei;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 44px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
