import { Bond } from "../../common/types";

export type State = {
	bonds: { [instrumentId: string]: Bond },
	portfolio: { [instrumentId: string]: number },
};

// Загружаем бонды из json-чика
let bonds = require("../../data/bonds.json");
bonds.map(bond => Bond.deserialize(bond));

// Инициализируем портфолио с пустыми облигациями 
let portfolio: { [instrumentId: string]: number } = {};
bonds.forEach((bond: Bond) => {
	portfolio = {
		...portfolio, ...{ [bond.instrumentId]: 0 }
	}
});

// Трансформируем данные в нужынй вид
bonds.reduce(
	function (map: { [instrumentId: string]: Bond }, bond: Bond) {
		map[bond.instrumentId] = bond;
		return map;
	}, {}
);

export const initState: State = {
	bonds,
	portfolio,
};
