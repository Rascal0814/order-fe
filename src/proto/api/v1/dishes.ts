/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Dishes } from "./data";
import Long = require("long");

export const protobufPackage = "v1";

export interface UpdateDishesResponse {
  dishes: Dishes | undefined;
}

export interface UpdateDishesRequest {
  id: string;
  name: string;
  logo: string;
  remark: string;
}

export interface DelDishesResponse {
}

export interface DelDishesRequest {
  id: string;
}

export interface GetDishesRequest {
  id: string;
}

export interface GetDishesResponse {
  dishes: Dishes | undefined;
}

export interface ListDishesResponse {
  dishes: Dishes[];
  total: number;
}

export interface ListDishesRequest {
  name: string;
  pageIndex: number;
  pageSize: number;
}

export interface CreateDishesRequest {
  name: string;
  logo: string;
  remark: string;
}

export interface CreateDishesResponse {
  dishes: Dishes | undefined;
}

function createBaseUpdateDishesResponse(): UpdateDishesResponse {
  return { dishes: undefined };
}

export const UpdateDishesResponse = {
  encode(message: UpdateDishesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishes !== undefined) {
      Dishes.encode(message.dishes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDishesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDishesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishes = Dishes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDishesResponse {
    return { dishes: isSet(object.dishes) ? Dishes.fromJSON(object.dishes) : undefined };
  },

  toJSON(message: UpdateDishesResponse): unknown {
    const obj: any = {};
    if (message.dishes !== undefined) {
      obj.dishes = Dishes.toJSON(message.dishes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDishesResponse>, I>>(base?: I): UpdateDishesResponse {
    return UpdateDishesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDishesResponse>, I>>(object: I): UpdateDishesResponse {
    const message = createBaseUpdateDishesResponse();
    message.dishes = (object.dishes !== undefined && object.dishes !== null)
      ? Dishes.fromPartial(object.dishes)
      : undefined;
    return message;
  },
};

function createBaseUpdateDishesRequest(): UpdateDishesRequest {
  return { id: "", name: "", logo: "", remark: "" };
}

export const UpdateDishesRequest = {
  encode(message: UpdateDishesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.logo !== "") {
      writer.uint32(26).string(message.logo);
    }
    if (message.remark !== "") {
      writer.uint32(34).string(message.remark);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDishesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateDishesRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logo = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.remark = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateDishesRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      remark: isSet(object.remark) ? globalThis.String(object.remark) : "",
    };
  },

  toJSON(message: UpdateDishesRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.logo !== "") {
      obj.logo = message.logo;
    }
    if (message.remark !== "") {
      obj.remark = message.remark;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateDishesRequest>, I>>(base?: I): UpdateDishesRequest {
    return UpdateDishesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateDishesRequest>, I>>(object: I): UpdateDishesRequest {
    const message = createBaseUpdateDishesRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.logo = object.logo ?? "";
    message.remark = object.remark ?? "";
    return message;
  },
};

function createBaseDelDishesResponse(): DelDishesResponse {
  return {};
}

export const DelDishesResponse = {
  encode(_: DelDishesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelDishesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelDishesResponse();
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

  fromJSON(_: any): DelDishesResponse {
    return {};
  },

  toJSON(_: DelDishesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DelDishesResponse>, I>>(base?: I): DelDishesResponse {
    return DelDishesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelDishesResponse>, I>>(_: I): DelDishesResponse {
    const message = createBaseDelDishesResponse();
    return message;
  },
};

function createBaseDelDishesRequest(): DelDishesRequest {
  return { id: "" };
}

export const DelDishesRequest = {
  encode(message: DelDishesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelDishesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelDishesRequest();
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

  fromJSON(object: any): DelDishesRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DelDishesRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelDishesRequest>, I>>(base?: I): DelDishesRequest {
    return DelDishesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelDishesRequest>, I>>(object: I): DelDishesRequest {
    const message = createBaseDelDishesRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetDishesRequest(): GetDishesRequest {
  return { id: "" };
}

export const GetDishesRequest = {
  encode(message: GetDishesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDishesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDishesRequest();
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

  fromJSON(object: any): GetDishesRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetDishesRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDishesRequest>, I>>(base?: I): GetDishesRequest {
    return GetDishesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDishesRequest>, I>>(object: I): GetDishesRequest {
    const message = createBaseGetDishesRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetDishesResponse(): GetDishesResponse {
  return { dishes: undefined };
}

export const GetDishesResponse = {
  encode(message: GetDishesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishes !== undefined) {
      Dishes.encode(message.dishes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDishesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDishesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishes = Dishes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDishesResponse {
    return { dishes: isSet(object.dishes) ? Dishes.fromJSON(object.dishes) : undefined };
  },

  toJSON(message: GetDishesResponse): unknown {
    const obj: any = {};
    if (message.dishes !== undefined) {
      obj.dishes = Dishes.toJSON(message.dishes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetDishesResponse>, I>>(base?: I): GetDishesResponse {
    return GetDishesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetDishesResponse>, I>>(object: I): GetDishesResponse {
    const message = createBaseGetDishesResponse();
    message.dishes = (object.dishes !== undefined && object.dishes !== null)
      ? Dishes.fromPartial(object.dishes)
      : undefined;
    return message;
  },
};

function createBaseListDishesResponse(): ListDishesResponse {
  return { dishes: [], total: 0 };
}

export const ListDishesResponse = {
  encode(message: ListDishesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dishes) {
      Dishes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDishesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDishesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishes.push(Dishes.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListDishesResponse {
    return {
      dishes: globalThis.Array.isArray(object?.dishes) ? object.dishes.map((e: any) => Dishes.fromJSON(e)) : [],
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: ListDishesResponse): unknown {
    const obj: any = {};
    if (message.dishes?.length) {
      obj.dishes = message.dishes.map((e) => Dishes.toJSON(e));
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListDishesResponse>, I>>(base?: I): ListDishesResponse {
    return ListDishesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDishesResponse>, I>>(object: I): ListDishesResponse {
    const message = createBaseListDishesResponse();
    message.dishes = object.dishes?.map((e) => Dishes.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseListDishesRequest(): ListDishesRequest {
  return { name: "", pageIndex: 0, pageSize: 0 };
}

export const ListDishesRequest = {
  encode(message: ListDishesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListDishesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDishesRequest();
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

  fromJSON(object: any): ListDishesRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      pageIndex: isSet(object.pageIndex) ? globalThis.Number(object.pageIndex) : 0,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
    };
  },

  toJSON(message: ListDishesRequest): unknown {
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

  create<I extends Exact<DeepPartial<ListDishesRequest>, I>>(base?: I): ListDishesRequest {
    return ListDishesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListDishesRequest>, I>>(object: I): ListDishesRequest {
    const message = createBaseListDishesRequest();
    message.name = object.name ?? "";
    message.pageIndex = object.pageIndex ?? 0;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseCreateDishesRequest(): CreateDishesRequest {
  return { name: "", logo: "", remark: "" };
}

export const CreateDishesRequest = {
  encode(message: CreateDishesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.logo !== "") {
      writer.uint32(18).string(message.logo);
    }
    if (message.remark !== "") {
      writer.uint32(26).string(message.remark);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDishesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDishesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logo = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.remark = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDishesRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      remark: isSet(object.remark) ? globalThis.String(object.remark) : "",
    };
  },

  toJSON(message: CreateDishesRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.logo !== "") {
      obj.logo = message.logo;
    }
    if (message.remark !== "") {
      obj.remark = message.remark;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDishesRequest>, I>>(base?: I): CreateDishesRequest {
    return CreateDishesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDishesRequest>, I>>(object: I): CreateDishesRequest {
    const message = createBaseCreateDishesRequest();
    message.name = object.name ?? "";
    message.logo = object.logo ?? "";
    message.remark = object.remark ?? "";
    return message;
  },
};

function createBaseCreateDishesResponse(): CreateDishesResponse {
  return { dishes: undefined };
}

export const CreateDishesResponse = {
  encode(message: CreateDishesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishes !== undefined) {
      Dishes.encode(message.dishes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDishesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDishesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishes = Dishes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDishesResponse {
    return { dishes: isSet(object.dishes) ? Dishes.fromJSON(object.dishes) : undefined };
  },

  toJSON(message: CreateDishesResponse): unknown {
    const obj: any = {};
    if (message.dishes !== undefined) {
      obj.dishes = Dishes.toJSON(message.dishes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDishesResponse>, I>>(base?: I): CreateDishesResponse {
    return CreateDishesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDishesResponse>, I>>(object: I): CreateDishesResponse {
    const message = createBaseCreateDishesResponse();
    message.dishes = (object.dishes !== undefined && object.dishes !== null)
      ? Dishes.fromPartial(object.dishes)
      : undefined;
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
