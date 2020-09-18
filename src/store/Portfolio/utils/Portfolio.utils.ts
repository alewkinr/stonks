import { Bond } from "../../../common/types";
import { portfolio } from "../Portfolio.reducer";

const _filterBondsByInstrumentId = (bonds, _id: string): Array<Bond> => {
    return bonds.filter((bond) => bond.instrumentId === _id);
};

// FindBondByInstrumentId - получаем объект бонда по его instrumentId
export const FindBondByInstrumentId = (
    bonds: { [instrumentId: string]: Bond },
    instrumentId: string
): Bond => {
    let res = _filterBondsByInstrumentId(bonds, instrumentId);
    if (res.length === 0) {
        return {} as Bond;
    }

    if (res.length === 1) {
        return res[0];
    }

    throw "duplicated bond in data";
};

const _hasBondIdAsKey = (
    bondsStoreObj: { [instrumentId: string]: any },
    _id: string
): boolean => {
    let res = _filterBondsByInstrumentId(bondsStoreObj, _id);

    if (res.length === 0) {
        return false;
    }
    if (res.length === 1) {
        return true;
    }

    throw "duplicated bond in data";
};

// IsBondIncludedInPortfolio - проверяет что бонд есть в портфеле
export const IsBondIncludedInPortfolio = (
    bonds: { [instrumentId: string]: any },
    instrumentId: string
): boolean => {
    return _hasBondIdAsKey(bonds, instrumentId);
};

// CalculateBondsCost - вычисляем номинальную стоимость пачки бондов
export const CalculateBondsCost = (bond: Bond, amount: number): number => {
    const MAX_AMOUNT_LIMIT = 100;
    let res = 0;

    if (amount <= 0) {
        return Number(bond.notional) * 1;
    }

    if (amount > MAX_AMOUNT_LIMIT) {
        return Number(bond.notional) * MAX_AMOUNT_LIMIT;
    }

    return Number(bond.notional) * amount;
};

export const FindBondAmountByInstrumentId = (
    portfolio: { [instrumentId: string]: number },
    instrumentId: string
): number => {
    return portfolio[instrumentId];
};
