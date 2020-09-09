export enum Currency {
    RUB = "RUB"
}

export class Bond {

    constructor(
        private readonly _instrumentId: string,   // ISIN / CUSIP
        private readonly _shortName: string,
        private readonly _name: string,
        private readonly _issuer: string,
        private readonly _issuerName: string,
        private readonly _issuerImg: string,
        private readonly _maturityDate: Date,
        private readonly _notional: number,
        private readonly _currency: Currency,
        private readonly _couponAnnualPercent: number,
        private readonly _couponCost: number,
        private readonly _couponPeriod: number)
    {
        this._instrumentId = _instrumentId;
        this._shortName = _shortName;
        this._name = _name;
        this._issuer = _issuer;
        this._issuerName = _issuerName;
        this._issuerImg = _issuerImg;
        this._maturityDate = _maturityDate;
        this._notional = _notional;
        this._currency = _currency;
        this._couponAnnualPercent = _couponAnnualPercent;
        this._couponCost = _couponCost;
        this._couponPeriod = _couponPeriod;
    }

    get instrumentId(): string {
        return this._instrumentId;
    }

    get issuer(): String {
        return this._issuer;
    }

    get issuerImg(): String {
        return this._issuerImg;
    }

    get maturityDate(): string {
        return this._maturityDate.toLocaleDateString();
    }

    get notional(): string {
        let ccy;
        switch(this._currency) {
            case Currency.RUB:
                ccy = "₽"
                break;
            default:
                throw "unknown currency";
        }
        return this._notional + " " + ccy;
    }

    get couponAnnualPercent(): string {
        return (this._couponAnnualPercent).toFixed(2);
    }

    static deserialize(input: any): Bond {
        return new Bond(
            input.instrumentId,
            input.shortName,
            input.name,
            input.issuer,
            input.issuerName,
            input.issuerImg,
            new Date(Date.parse(input.maturityDate)),
            input.notional,
            Currency[input.currency],
            input.couponAnnualPercent,
            input.couponCost,
            input.couponPeriod
        );
    }
}
