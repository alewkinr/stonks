import * as ActionsFC from "./Portfolio.actions";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type Actions = ReturnType<InferValueTypes<typeof ActionsFC>>;
