<template>
  <view class="content">home page</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dishes from '@/api/v1/dishes'
import { CreateDishesRequest, GetDishesRequest, GetDishesResponse, CreateDishesResponse, ListDishesRequest, ListDishesResponse } from '@/proto/api/v1/dishes'
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