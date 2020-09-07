import React from "react";
import { ProfitView } from "./Profit.view";
import { Сurrency } from "./types/Сurrency";

type ProfitState = {
  value: string;
  currency: Сurrency;
  percent: string;
};

export type ProfitProps = ProfitState;

export const Profit: React.FC<ProfitProps> = (props) => {
  return <ProfitView {...props} />;
};
