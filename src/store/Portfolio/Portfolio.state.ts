import { Bond } from "../../common/types";

export type State = {
    // список всех облигаций
    bonds: { [instrumentId: string]: Bond };

    // структура портфолио облигаций в виде id => amount
    portfolio: { [instrumentId: string]: number };

    // структуру сумм портфолио в виде id => price
    cost: Map<string, number>;
};

// Загружаем бонды из json-чика
let bonds = require("../../data/bonds.json");
bonds.map((bond) => Bond.deserialize(bond));

// Инициализируем портфолио с пустыми облигациями
let portfolio: { [instrumentId: string]: number } = {};
let cost: Map<string, number> = new Map();
bonds.forEach((bond: Bond) => {
    portfolio = {
        ...portfolio,
        ...{ [bond.instrumentId]: 0 },
    };

    cost.set(bond.instrumentId, Number(bond.price));
});

// Трансформируем данные в нужынй вид
bonds.reduce(function (map: { [instrumentId: string]: Bond }, bond: Bond) {
    map[bond.instrumentId] = bond;
    return map;
}, {});

portfolio["RU000A0JXRW5"] = 75;
portfolio["RU000A0ZZES2"] = 50;
export const initState: State = {
    bonds,
    portfolio,
    cost,
};
