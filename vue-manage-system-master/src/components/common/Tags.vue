<template>
<div class="tags-box">
    <div class="on-left">
        <i class="icon icon-left"></i>
    </div>
    <div class="tags" v-if="showTags">
        <ul>
            <li @click="$router.push(item.path)" class="tags-li" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
                <!-- <router-link :to="item.path" class="tags-li-title">
                    {{item.title}}
                </router-link> -->
                <a class="tags-li-title">{{item.title}}</a>
                <span class="tags-li-icon" @click.stop="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul>
    </div>
    

    <div class="on-right">
        <i class="icon icon-right"></i>
    </div>

    <div class="tags-close-box">
       <div @click="yqczShow = !yqczShow" class="yqcz">页签操作<i class="icon-xl"></i></div>
       <el-collapse-transition>
       <ul v-show="yqczShow" class="xl-ul">
           <li @click="$router.push(item.path)" v-for="(item,index) in tagsList">{{item.title}}
               <span class="tags-xl-close" @click.stop="closeTags(index)"><i class="el-icon-close"></i></span>
               </li>
       </ul>
       </el-collapse-transition>
    </div>

    <div @click="handleFullScreen" class="on-full">
        <i class="icon icon-full"></i>
    </div>
    
</div>
    
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      tagsList: [],
      yqczShow: false
    };
  },
  methods: {
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
   
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      bus.$emit("tags", this.tagsList);
    },
    handleTags(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    }
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  created() {
    this.setTags(this.$route);
  }
};
</script>


<style lang="scss">
.tags-box {
  width: 100%;
  //   overflow: hidden;
  position: relative;
  height: 40px;
  background-color: #184c7e;
  box-shadow: 0px 2px 4px 0px rgba(3, 12, 65, 0.02);
  .on-left {
    cursor: pointer;
    width: 40px;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 40px;
    border-right: 1px solid #1a3459;
    box-sizing: border-box;
    .icon {
      width: 15px;
      height: 13px;
      display: inline-block;
    }
    .icon-left {
      background: url("../../assets/PeiDianJianCe/icon_zl.png") no-repeat;
    }
  }
  .on-right {
    cursor: pointer;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 0;
    right: 140px;
    text-align: center;
    border-left: 1px solid #1a3459;
    box-sizing: border-box;
    .icon {
      width: 15px;
      height: 13px;
      display: inline-block;
    }
    .icon-right {
      background: url("../../assets/PeiDianJianCe/icon_yl.png") no-repeat;
    }
  }
  .on-full {
    cursor: pointer;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    border-left: 1px solid #1a3459;
    box-sizing: border-box;
    .icon {
      width: 15px;
      height: 13px;
      display: inline-block;
    }
    .icon-full {
      background: url("../../assets/PeiDianJianCe/icon_1.png") no-repeat;
    }
  }
}
.tags {
  position: relative;
  overflow: hidden;
  background: #184c7e;
  padding-right: 185px;
  height: 40px;
  box-sizing: border-box;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.tags-li {
  float: left;
  width: 110px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  i {
    color: #d5f8ff;
  }
}

.tags-li:not(.active):hover {
  background: rgb(36, 67, 110);
}

.tags-li.active {
  //   color: #fff;
}

.tags-li-title {
  font-size: 12px;
  font-family: HiraginoSansGB-W3;
  font-weight: normal;
  color: rgba(213, 248, 255, 1);
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 15px;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

.tags-close-box {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 40px;
  box-sizing: border-box;
  border-left: 1px solid #1a3459;
  padding-top: 1px;
  text-align: center;
  width: 100px;
  height: 40px;
  line-height: 40px;
  z-index: 10;
  .yqcz {
    color: #d5f8ff;
    font-size: 14px;
    font-family: HiraginoSansGB-W3;
    font-weight: normal;
  }

  .xl-ul {
    width: 140px;
    position: absolute;
    top: 40px;
    left: -40px;
    list-style: none;
    background-color: #184c7e;
    color: #d5f8ff;
    padding: 0 10px;
    box-sizing: border-box;
    .tags-xl-close {
      float: right;
    }
    li {
      font-size: 13px;
      border-bottom: 1px solid #1a3459;
    }
  }
  .icon-xl {
    width: 14px;
    height: 10px;
    margin-left: 12px;
    display: inline-block;
    background: url("../../assets/PeiDianJianCe/icon_xl.png") no-repeat;
  }
}
</style>
