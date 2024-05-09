<template>
  <view class="content">
    <view class="u-page">
      <up-list>
        <up-list-item v-for="item in dishList.dishes" :key="item.id">
          <up-cell :title="item.name">
            <template #icon>
              <up-avatar shape="square" size="35" :src="item.logo" customStyle="margin: -3px 5px -3px 0"></up-avatar>
            </template>
          </up-cell>
        </up-list-item>
      </up-list>
    </view>
    <tool-bar />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dishes from '@/api/v1/dishes'
import { CreateDishesRequest, GetDishesRequest, GetDishesResponse, CreateDishesResponse, ListDishesRequest, ListDishesResponse } from '@/proto/api/v1/dishes'
import { Dishes } from '@/proto/api/v1/data'
import toolBar from "@/components/tool-bar/index.vue"
let dishList = ref<ListDishesResponse>({
  dishes: [],
  total: 0,
})

function GetDishes(req: GetDishesRequest) {
  dishes.get(req).then((res: GetDishesResponse) => {
    console.log(res.dishes);
  })
}

function CreateDishes(req: CreateDishesRequest) {
  dishes.create(req).then((res: CreateDishesResponse) => {
    console.log(res.dishes);
  })
}

async function ListDishes(req: ListDishesRequest) {
  await dishes.list(req).then((res: ListDishesResponse) => {
    console.log(res);
    dishList.value = res
  })
}

onMounted(() => {
  ListDishes({
    pageIndex: 1,
    pageSize: 10,
    name: ''
  })
})



</script>

<style></style>