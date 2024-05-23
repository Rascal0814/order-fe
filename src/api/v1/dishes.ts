import requestManager from '@/utils/request'
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
    return requestManager.create({
      url: 'dish/create',
      method: 'POST',
      data: data,
    })
  }
  get(data: GetDishesRequest): Promise<GetDishesResponse> {
    return requestManager.create({
      url: `dish/get/${data.id}`,
      method: 'GET',
    })
  }
  del(data: DelDishesRequest): Promise<DelDishesResponse> {
    return requestManager.create({
      url: `dish/delete/${data.id}`,
      method: 'DELETE',
    })
  }
  update(data: UpdateDishesRequest): Promise<UpdateDishesResponse> {
    return requestManager.create({
      url: `dish/update`,
      method: 'PUT',
      data: data,
    })
  }
  list(data: ListDishesRequest): Promise<ListDishesResponse> {
    return requestManager.create({
      url: `dish/list`,
      method: 'GET',
      data: data,
    })
  }
}

const dishes = new DishesRequest()
export default dishes
