<template>
   <div id="tab-bar">
     <div id="tab-bar-item">首页</div>
     <div id="tab-bar-item">分类</div>
     <div id="tab-bar-item">购物车</div>
     <div id="tab-bar-item">我的</div>
   </div>
</template>

<script>
export default {
  name:"tabbar",
}
</script>

<style scoped lang='less'>
#tab-bar{
  display: flex;
  background-color: #d3d1d1;

  position:fixed;
  left:0;
  right:0;
  bottom:0;
  
  .tab-bar-item{
    flex:1;
    text-align:center;
    height:45px;
  }
}
</style>