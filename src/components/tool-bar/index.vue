<template>
  <view class="tool-bar">
    <up-row customStyle="margin-bottom: 10px" align="center" height="100%">
      <up-col span="4" textAlign="center">
        <!-- <view class="tool-bar-btn"> -->
        <up-image :src="homePng" width="100%" hight="100%"></up-image>
        <!-- </view> -->
      </up-col>
      <up-col span="4" textAlign="center">
        <view class="tool-bar-btn">菜单</view>
      </up-col>
      <up-col span="4" textAlign="center">
        <view class="tool-bar-btn">我的</view>
      </up-col>
    </up-row>
  </view>
</template>

<script lang="ts" setup>
import homePng from "@/assets/icon/home.png"
</script>

<style lang="scss">
.tool-bar {
  height: 30px;
  background-color: rgb(240, 240, 240);
}

.tool-bar-btn {
  height: 25px;
  border-radius: 4px;
}
</style>