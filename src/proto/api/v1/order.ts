/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Order, OrderStatus, orderStatusFromJSON, orderStatusToJSON } from "./data";
import Long = require("long");

export const protobufPackage = "v1";

export interface UpdateOrdersResponse {
  order: Order | undefined;
}

export interface UpdateOrdersRequest {
  id: string;
  dishId: string;
  status: OrderStatus;
}

export interface DelOrdersResponse {
}

export interface DelOrdersRequest {
  id: string;
}

export interface GetOrdersRequest {
  id: string;
}

export interface GetOrdersResponse {
  order: Order | undefined;
}

export interface ListOrdersResponse {
  orders: Order[];
  total: number;
}

export interface ListOrdersRequest {
  name: string;
  pageIndex: number;
  pageSize: number;
}

export interface CreateOrdersRequest {
  dishId: string;
  remake: string;
}

export interface CreateOrdersResponse {
  order: Order | undefined;
}

function createBaseUpdateOrdersResponse(): UpdateOrdersResponse {
  return { order: undefined };
}

export const UpdateOrdersResponse = {
  encode(message: UpdateOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOrdersResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: UpdateOrdersResponse): unknown {
    const obj: any = {};
    if (message.order !== undefined) {
      obj.order = Order.toJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOrdersResponse>, I>>(base?: I): UpdateOrdersResponse {
    return UpdateOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOrdersResponse>, I>>(object: I): UpdateOrdersResponse {
    const message = createBaseUpdateOrdersResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseUpdateOrdersRequest(): UpdateOrdersRequest {
  return { id: "", dishId: "", status: 0 };
}

export const UpdateOrdersRequest = {
  encode(message: UpdateOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.dishId !== "") {
      writer.uint32(18).string(message.dishId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dishId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOrdersRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "",
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: UpdateOrdersRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    if (message.status !== 0) {
      obj.status = orderStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOrdersRequest>, I>>(base?: I): UpdateOrdersRequest {
    return UpdateOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOrdersRequest>, I>>(object: I): UpdateOrdersRequest {
    const message = createBaseUpdateOrdersRequest();
    message.id = object.id ?? "";
    message.dishId = object.dishId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseDelOrdersResponse(): DelOrdersResponse {
  return {};
}

export const DelOrdersResponse = {
  encode(_: DelOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DelOrdersResponse {
    return {};
  },

  toJSON(_: DelOrdersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DelOrdersResponse>, I>>(base?: I): DelOrdersResponse {
    return DelOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelOrdersResponse>, I>>(_: I): DelOrdersResponse {
    const message = createBaseDelOrdersResponse();
    return message;
  },
};

function createBaseDelOrdersRequest(): DelOrdersRequest {
  return { id: "" };
}

export const DelOrdersRequest = {
  encode(message: DelOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelOrdersRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DelOrdersRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelOrdersRequest>, I>>(base?: I): DelOrdersRequest {
    return DelOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelOrdersRequest>, I>>(object: I): DelOrdersRequest {
    const message = createBaseDelOrdersRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetOrdersRequest(): GetOrdersRequest {
  return { id: "" };
}

export const GetOrdersRequest = {
  encode(message: GetOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetOrdersRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrdersRequest>, I>>(base?: I): GetOrdersRequest {
    return GetOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrdersRequest>, I>>(object: I): GetOrdersRequest {
    const message = createBaseGetOrdersRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetOrdersResponse(): GetOrdersResponse {
  return { order: undefined };
}

export const GetOrdersResponse = {
  encode(message: GetOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: GetOrdersResponse): unknown {
    const obj: any = {};
    if (message.order !== undefined) {
      obj.order = Order.toJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetOrdersResponse>, I>>(base?: I): GetOrdersResponse {
    return GetOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetOrdersResponse>, I>>(object: I): GetOrdersResponse {
    const message = createBaseGetOrdersResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

function createBaseListOrdersResponse(): ListOrdersResponse {
  return { orders: [], total: 0 };
}

export const ListOrdersResponse = {
  encode(message: ListOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOrdersResponse {
    return {
      orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: ListOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => Order.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrdersResponse>, I>>(base?: I): ListOrdersResponse {
    return ListOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrdersResponse>, I>>(object: I): ListOrdersResponse {
    const message = createBaseListOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseListOrdersRequest(): ListOrdersRequest {
  return { name: "", pageIndex: 0, pageSize: 0 };
}

export const ListOrdersRequest = {
  encode(message: ListOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pageIndex !== 0) {
      writer.uint32(7104).int64(message.pageIndex);
    }
    if (message.pageSize !== 0) {
      writer.uint32(7112).int64(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 888:
          if (tag !== 7104) {
            break;
          }

          message.pageIndex = longToNumber(reader.int64() as Long);
          continue;
        case 889:
          if (tag !== 7112) {
            break;
          }

          message.pageSize = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListOrdersRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      pageIndex: isSet(object.pageIndex) ? globalThis.Number(object.pageIndex) : 0,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
    };
  },

  toJSON(message: ListOrdersRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.pageIndex !== 0) {
      obj.pageIndex = Math.round(message.pageIndex);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListOrdersRequest>, I>>(base?: I): ListOrdersRequest {
    return ListOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListOrdersRequest>, I>>(object: I): ListOrdersRequest {
    const message = createBaseListOrdersRequest();
    message.name = object.name ?? "";
    message.pageIndex = object.pageIndex ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseCreateOrdersRequest(): CreateOrdersRequest {
  return { dishId: "", remake: "" };
}

export const CreateOrdersRequest = {
  encode(message: CreateOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishId !== "") {
      writer.uint32(10).string(message.dishId);
    }
    if (message.remake !== "") {
      writer.uint32(18).string(message.remake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOrdersRequest {
    return {
      dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "",
      remake: isSet(object.remake) ? globalThis.String(object.remake) : "",
    };
  },

  toJSON(message: CreateOrdersRequest): unknown {
    const obj: any = {};
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    if (message.remake !== "") {
      obj.remake = message.remake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOrdersRequest>, I>>(base?: I): CreateOrdersRequest {
    return CreateOrdersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrdersRequest>, I>>(object: I): CreateOrdersRequest {
    const message = createBaseCreateOrdersRequest();
    message.dishId = object.dishId ?? "";
    message.remake = object.remake ?? "";
    return message;
  },
};

function createBaseCreateOrdersResponse(): CreateOrdersResponse {
  return { order: undefined };
}

export const CreateOrdersResponse = {
  encode(message: CreateOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.order = Order.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOrdersResponse {
    return { order: isSet(object.order) ? Order.fromJSON(object.order) : undefined };
  },

  toJSON(message: CreateOrdersResponse): unknown {
    const obj: any = {};
    if (message.order !== undefined) {
      obj.order = Order.toJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOrdersResponse>, I>>(base?: I): CreateOrdersResponse {
    return CreateOrdersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOrdersResponse>, I>>(object: I): CreateOrdersResponse {
    const message = createBaseCreateOrdersResponse();
    message.order = (object.order !== undefined && object.order !== null) ? Order.fromPartial(object.order) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
