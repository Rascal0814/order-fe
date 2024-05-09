/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { MakeStep } from "./data";
import Long = require("long");

export const protobufPackage = "v1";

export interface DelMakeStepsByDishIdRequest {
  dishId: string;
}

export interface DelMakeStepsByDishIdResponse {
}

export interface UpdateMakeStepsResponse {
  makeStep: MakeStep | undefined;
}

export interface UpdateMakeStepsRequest {
  id: string;
  dishId: string;
  step: number;
  content: string;
}

export interface DelMakeStepsResponse {
}

export interface DelMakeStepsRequest {
  id: string;
}

export interface GetMakeStepsRequest {
  id: string;
}

export interface GetMakeStepsResponse {
  makeStep: MakeStep | undefined;
}

export interface DishesMakeStepsResponse {
  steps: MakeStep[];
}

export interface DishesMakeStepsRequest {
  dishId: string;
}

export interface CreateMakeStepsRequest {
  dishId: string;
  steps: CreateMakeStep[];
}

export interface CreateMakeStep {
  step: number;
  content: string;
}

export interface CreateMakeStepsResponse {
  steps: MakeStep[];
}

function createBaseDelMakeStepsByDishIdRequest(): DelMakeStepsByDishIdRequest {
  return { dishId: "" };
}

export const DelMakeStepsByDishIdRequest = {
  encode(message: DelMakeStepsByDishIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishId !== "") {
      writer.uint32(10).string(message.dishId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelMakeStepsByDishIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelMakeStepsByDishIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DelMakeStepsByDishIdRequest {
    return { dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "" };
  },

  toJSON(message: DelMakeStepsByDishIdRequest): unknown {
    const obj: any = {};
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelMakeStepsByDishIdRequest>, I>>(base?: I): DelMakeStepsByDishIdRequest {
    return DelMakeStepsByDishIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelMakeStepsByDishIdRequest>, I>>(object: I): DelMakeStepsByDishIdRequest {
    const message = createBaseDelMakeStepsByDishIdRequest();
    message.dishId = object.dishId ?? "";
    return message;
  },
};

function createBaseDelMakeStepsByDishIdResponse(): DelMakeStepsByDishIdResponse {
  return {};
}

export const DelMakeStepsByDishIdResponse = {
  encode(_: DelMakeStepsByDishIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelMakeStepsByDishIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelMakeStepsByDishIdResponse();
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

  fromJSON(_: any): DelMakeStepsByDishIdResponse {
    return {};
  },

  toJSON(_: DelMakeStepsByDishIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DelMakeStepsByDishIdResponse>, I>>(base?: I): DelMakeStepsByDishIdResponse {
    return DelMakeStepsByDishIdResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelMakeStepsByDishIdResponse>, I>>(_: I): DelMakeStepsByDishIdResponse {
    const message = createBaseDelMakeStepsByDishIdResponse();
    return message;
  },
};

function createBaseUpdateMakeStepsResponse(): UpdateMakeStepsResponse {
  return { makeStep: undefined };
}

export const UpdateMakeStepsResponse = {
  encode(message: UpdateMakeStepsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makeStep !== undefined) {
      MakeStep.encode(message.makeStep, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMakeStepsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMakeStepsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.makeStep = MakeStep.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMakeStepsResponse {
    return { makeStep: isSet(object.makeStep) ? MakeStep.fromJSON(object.makeStep) : undefined };
  },

  toJSON(message: UpdateMakeStepsResponse): unknown {
    const obj: any = {};
    if (message.makeStep !== undefined) {
      obj.makeStep = MakeStep.toJSON(message.makeStep);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMakeStepsResponse>, I>>(base?: I): UpdateMakeStepsResponse {
    return UpdateMakeStepsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMakeStepsResponse>, I>>(object: I): UpdateMakeStepsResponse {
    const message = createBaseUpdateMakeStepsResponse();
    message.makeStep = (object.makeStep !== undefined && object.makeStep !== null)
      ? MakeStep.fromPartial(object.makeStep)
      : undefined;
    return message;
  },
};

function createBaseUpdateMakeStepsRequest(): UpdateMakeStepsRequest {
  return { id: "", dishId: "", step: 0, content: "" };
}

export const UpdateMakeStepsRequest = {
  encode(message: UpdateMakeStepsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMakeStepsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMakeStepsRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateMakeStepsRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "",
      step: isSet(object.step) ? globalThis.Number(object.step) : 0,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: UpdateMakeStepsRequest): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMakeStepsRequest>, I>>(base?: I): UpdateMakeStepsRequest {
    return UpdateMakeStepsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateMakeStepsRequest>, I>>(object: I): UpdateMakeStepsRequest {
    const message = createBaseUpdateMakeStepsRequest();
    message.id = object.id ?? "";
    message.dishId = object.dishId ?? "";
    message.step = object.step ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseDelMakeStepsResponse(): DelMakeStepsResponse {
  return {};
}

export const DelMakeStepsResponse = {
  encode(_: DelMakeStepsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelMakeStepsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelMakeStepsResponse();
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

  fromJSON(_: any): DelMakeStepsResponse {
    return {};
  },

  toJSON(_: DelMakeStepsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DelMakeStepsResponse>, I>>(base?: I): DelMakeStepsResponse {
    return DelMakeStepsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelMakeStepsResponse>, I>>(_: I): DelMakeStepsResponse {
    const message = createBaseDelMakeStepsResponse();
    return message;
  },
};

function createBaseDelMakeStepsRequest(): DelMakeStepsRequest {
  return { id: "" };
}

export const DelMakeStepsRequest = {
  encode(message: DelMakeStepsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelMakeStepsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelMakeStepsRequest();
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

  fromJSON(object: any): DelMakeStepsRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DelMakeStepsRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DelMakeStepsRequest>, I>>(base?: I): DelMakeStepsRequest {
    return DelMakeStepsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DelMakeStepsRequest>, I>>(object: I): DelMakeStepsRequest {
    const message = createBaseDelMakeStepsRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetMakeStepsRequest(): GetMakeStepsRequest {
  return { id: "" };
}

export const GetMakeStepsRequest = {
  encode(message: GetMakeStepsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMakeStepsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMakeStepsRequest();
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

  fromJSON(object: any): GetMakeStepsRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetMakeStepsRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMakeStepsRequest>, I>>(base?: I): GetMakeStepsRequest {
    return GetMakeStepsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMakeStepsRequest>, I>>(object: I): GetMakeStepsRequest {
    const message = createBaseGetMakeStepsRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetMakeStepsResponse(): GetMakeStepsResponse {
  return { makeStep: undefined };
}

export const GetMakeStepsResponse = {
  encode(message: GetMakeStepsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.makeStep !== undefined) {
      MakeStep.encode(message.makeStep, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMakeStepsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMakeStepsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.makeStep = MakeStep.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMakeStepsResponse {
    return { makeStep: isSet(object.makeStep) ? MakeStep.fromJSON(object.makeStep) : undefined };
  },

  toJSON(message: GetMakeStepsResponse): unknown {
    const obj: any = {};
    if (message.makeStep !== undefined) {
      obj.makeStep = MakeStep.toJSON(message.makeStep);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMakeStepsResponse>, I>>(base?: I): GetMakeStepsResponse {
    return GetMakeStepsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetMakeStepsResponse>, I>>(object: I): GetMakeStepsResponse {
    const message = createBaseGetMakeStepsResponse();
    message.makeStep = (object.makeStep !== undefined && object.makeStep !== null)
      ? MakeStep.fromPartial(object.makeStep)
      : undefined;
    return message;
  },
};

function createBaseDishesMakeStepsResponse(): DishesMakeStepsResponse {
  return { steps: [] };
}

export const DishesMakeStepsResponse = {
  encode(message: DishesMakeStepsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.steps) {
      MakeStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DishesMakeStepsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDishesMakeStepsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.steps.push(MakeStep.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DishesMakeStepsResponse {
    return { steps: globalThis.Array.isArray(object?.steps) ? object.steps.map((e: any) => MakeStep.fromJSON(e)) : [] };
  },

  toJSON(message: DishesMakeStepsResponse): unknown {
    const obj: any = {};
    if (message.steps?.length) {
      obj.steps = message.steps.map((e) => MakeStep.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DishesMakeStepsResponse>, I>>(base?: I): DishesMakeStepsResponse {
    return DishesMakeStepsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DishesMakeStepsResponse>, I>>(object: I): DishesMakeStepsResponse {
    const message = createBaseDishesMakeStepsResponse();
    message.steps = object.steps?.map((e) => MakeStep.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDishesMakeStepsRequest(): DishesMakeStepsRequest {
  return { dishId: "" };
}

export const DishesMakeStepsRequest = {
  encode(message: DishesMakeStepsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishId !== "") {
      writer.uint32(10).string(message.dishId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DishesMakeStepsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDishesMakeStepsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dishId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DishesMakeStepsRequest {
    return { dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "" };
  },

  toJSON(message: DishesMakeStepsRequest): unknown {
    const obj: any = {};
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DishesMakeStepsRequest>, I>>(base?: I): DishesMakeStepsRequest {
    return DishesMakeStepsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DishesMakeStepsRequest>, I>>(object: I): DishesMakeStepsRequest {
    const message = createBaseDishesMakeStepsRequest();
    message.dishId = object.dishId ?? "";
    return message;
  },
};

function createBaseCreateMakeStepsRequest(): CreateMakeStepsRequest {
  return { dishId: "", steps: [] };
}

export const CreateMakeStepsRequest = {
  encode(message: CreateMakeStepsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dishId !== "") {
      writer.uint32(10).string(message.dishId);
    }
    for (const v of message.steps) {
      CreateMakeStep.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMakeStepsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMakeStepsRequest();
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

          message.steps.push(CreateMakeStep.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMakeStepsRequest {
    return {
      dishId: isSet(object.dishId) ? globalThis.String(object.dishId) : "",
      steps: globalThis.Array.isArray(object?.steps) ? object.steps.map((e: any) => CreateMakeStep.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateMakeStepsRequest): unknown {
    const obj: any = {};
    if (message.dishId !== "") {
      obj.dishId = message.dishId;
    }
    if (message.steps?.length) {
      obj.steps = message.steps.map((e) => CreateMakeStep.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMakeStepsRequest>, I>>(base?: I): CreateMakeStepsRequest {
    return CreateMakeStepsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMakeStepsRequest>, I>>(object: I): CreateMakeStepsRequest {
    const message = createBaseCreateMakeStepsRequest();
    message.dishId = object.dishId ?? "";
    message.steps = object.steps?.map((e) => CreateMakeStep.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateMakeStep(): CreateMakeStep {
  return { step: 0, content: "" };
}

export const CreateMakeStep = {
  encode(message: CreateMakeStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.step !== 0) {
      writer.uint32(8).int64(message.step);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMakeStep {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMakeStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.step = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMakeStep {
    return {
      step: isSet(object.step) ? globalThis.Number(object.step) : 0,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: CreateMakeStep): unknown {
    const obj: any = {};
    if (message.step !== 0) {
      obj.step = Math.round(message.step);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMakeStep>, I>>(base?: I): CreateMakeStep {
    return CreateMakeStep.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMakeStep>, I>>(object: I): CreateMakeStep {
    const message = createBaseCreateMakeStep();
    message.step = object.step ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseCreateMakeStepsResponse(): CreateMakeStepsResponse {
  return { steps: [] };
}

export const CreateMakeStepsResponse = {
  encode(message: CreateMakeStepsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.steps) {
      MakeStep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMakeStepsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMakeStepsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.steps.push(MakeStep.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateMakeStepsResponse {
    return { steps: globalThis.Array.isArray(object?.steps) ? object.steps.map((e: any) => MakeStep.fromJSON(e)) : [] };
  },

  toJSON(message: CreateMakeStepsResponse): unknown {
    const obj: any = {};
    if (message.steps?.length) {
      obj.steps = message.steps.map((e) => MakeStep.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMakeStepsResponse>, I>>(base?: I): CreateMakeStepsResponse {
    return CreateMakeStepsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateMakeStepsResponse>, I>>(object: I): CreateMakeStepsResponse {
    const message = createBaseCreateMakeStepsResponse();
    message.steps = object.steps?.map((e) => MakeStep.fromPartial(e)) || [];
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
