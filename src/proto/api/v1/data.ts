/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import Long = require("long");

export const protobufPackage = "v1";

/** OrderStatus 状态枚举 */
export enum OrderStatus {
  created = 0,
  doing = 1,
  finish = 2,
  UNRECOGNIZED = -1,
}

export function orderStatusFromJSON(object: any): OrderStatus {
  switch (object) {
    case 0:
    case "created":
      return OrderStatus.created;
    case 1:
    case "doing":
      return OrderStatus.doing;
    case 2:
    case "finish":
      return OrderStatus.finish;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStatus.UNRECOGNIZED;
  }
}

export function orderStatusToJSON(object: OrderStatus): string {
  switch (object) {
    case OrderStatus.created:
      return "created";
    case OrderStatus.doing:
      return "doing";
    case OrderStatus.finish:
      return "finish";
    case OrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Dishes 菜品 */
export interface Dishes {
  id: string;
  name: string;
  logo: string;
  remark: string;
  /** 创建时间 */
  createTime:
    | Date
    | undefined;
  /** 更新时间 */
  updateTime: Date | undefined;
}

/** Order 订单 */
export interface Order {
  id: string;
  dishId: string;
  status: string;
  creator: string;
  remark: string;
  /** 创建时间 */
  createTime:
    | Date
    | undefined;
  /** 更新时间 */
  updateTime: Date | undefined;
}

export interface MakeStep {
  id: string;
  dishId: string;
  step: number;
  content: string;
  creator: number;
  /** 创建时间 */
  createTime:
    | Date
    | undefined;
  /** 更新时间 */
  updateTime: Date | undefined;
}

function createBaseDishes(): Dishes {
  return { id: "", name: "", logo: "", remark: "", createTime: undefined, updateTime: undefined };
}

export const Dishes = {
  encode(message: Dishes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(7986).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dishes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDishes();
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
        case 998:
          if (tag !== 7986) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dishes {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      logo: isSet(object.logo) ? globalThis.String(object.logo) : "",
      remark: isSet(object.remark) ? globalThis.String(object.remark) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: Dishes): unknown {
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
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dishes>, I>>(base?: I): Dishes {
    return Dishes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dishes>, I>>(object: I): Dishes {
    const message = createBaseDishes();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.logo = object.logo ?? "";
    message.remark = object.remark ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return { id: "", dishId: "", status: "", creator: "", remark: "", createTime: undefined, updateTime: undefined };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.dishId !== "") {
      writer.uint32(18).string(message.dishId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.remark !== "") {
      writer.uint32(42).string(message.remark);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(7986).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
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
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.remark = reader.string();
          continue;
        case 998:
          if (tag !== 7986) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      remark: isSet(object.remark) ? globalThis.String(object.remark) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.remark !== "") {
      obj.remark = message.remark;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Order>, I>>(base?: I): Order {
    return Order.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.dishId = object.dishId ?? "";
    message.status = object.status ?? "";
    message.creator = object.creator ?? "";
    message.remark = object.remark ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

function createBaseMakeStep(): MakeStep {
  return { id: "", dishId: "", step: 0, content: "", creator: 0, createTime: undefined, updateTime: undefined };
}

export const MakeStep = {
  encode(message: MakeStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.dishId !== "") {
      writer.uint32(18).string(message.dishId);
    }
    if (message.step !== 0) {
      writer.uint32(24).int64(message.step);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    if (message.creator !== 0) {
      writer.uint32(40).int64(message.creator);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(7986).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MakeStep {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMakeStep();
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

          message.step = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.content = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.creator = longToNumber(reader.int64() as Long);
          continue;
        case 998:
          if (tag !== 7986) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MakeStep {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "",
      step: isSet(object.step) ? globalThis.Number(object.step) : 0,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      creator: isSet(object.creator) ? globalThis.Number(object.creator) : 0,
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
    };
  },

  toJSON(message: MakeStep): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    if (message.step !== 0) {
      obj.step = Math.round(message.step);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.creator !== 0) {
      obj.creator = Math.round(message.creator);
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MakeStep>, I>>(base?: I): MakeStep {
    return MakeStep.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MakeStep>, I>>(object: I): MakeStep {
    const message = createBaseMakeStep();
    message.id = object.id ?? "";
    message.dishId = object.dishId ?? "";
    message.step = object.step ?? 0;
    message.content = object.content ?? "";
    message.creator = object.creator ?? 0;
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
