import request from '@/utils/request'
import {
  CreateDishesRequest,
  GetDishesRequest,
  CreateDishesResponse,
  GetDishesResponse,
  DelDishesRequest,
  DelDishesResponse,
  UpdateDishesRequest,
  UpdateDishesResponse,
  ListDishesRequest,
  ListDishesResponse,
} from '@/proto/api/v1/dishes'

class DishesRequest {
  create(data: CreateDishesRequest): Promise<CreateDishesResponse> {
    return request({
      url: 'dish/create',
      method: 'post',
      data: data,
    })
  }
  get(data: GetDishesRequest): Promise<GetDishesResponse> {
    return request({
      url: `dish/get/${data.id}`,
      method: 'get',
    })
  }
  del(data: DelDishesRequest): Promise<DelDishesResponse> {
    return request({
      url: `dish/delete/${data.id}`,
      method: 'delete',
    })
  }
  update(data: UpdateDishesRequest): Promise<UpdateDishesResponse> {
    return request({
      url: `dish/update`,
      method: 'put',
      data: data,
    })
  }
  list(data: ListDishesRequest): Promise<ListDishesResponse> {
    return request({
      url: `dish/list`,
      method: 'get',
      params: data,
    })
  }
}

const dishes = new DishesRequest()
export default dishes
