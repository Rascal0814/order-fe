import request from '@/utils/uni_request'
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
      method: 'POST',
      data: data,
    })
  }
  get(data: GetDishesRequest): Promise<GetDishesResponse> {
    return request({
      url: `dish/get/${data.id}`,
      method: 'GET',
    })
  }
  del(data: DelDishesRequest): Promise<DelDishesResponse> {
    return request({
      url: `dish/delete/${data.id}`,
      method: 'DELETE',
    })
  }
  update(data: UpdateDishesRequest): Promise<UpdateDishesResponse> {
    return request({
      url: `dish/update`,
      method: 'PUT',
      data: data,
    })
  }
  list(data: ListDishesRequest): Promise<ListDishesResponse> {
    return request({
      url: `dish/list`,
      method: 'GET',
      data: data,
    })
  }
}

const dishes = new DishesRequest()
export default dishes
