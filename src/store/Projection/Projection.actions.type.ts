import * as ActionsFC from "./Projection.actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type Actions = ReturnType<InferValueTypes<typeof ActionsFC>>;
