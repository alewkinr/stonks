export enum Currency {
    RUB = "RUB"
}

export class Bond {

    constructor(
        private readonly _instrumentId: String,   // ISIN / CUSIP
        private readonly _issuer: String,
        private readonly _issuerImg: String,
        private readonly _maturityDate: Date,
        private readonly _notional: number,
        private readonly _currency: Currency,
        private readonly _couponRate: number)
    {
        this._instrumentId = _instrumentId;
        this._issuer = _issuer;
        this._issuerImg = _issuerImg;
        this._maturityDate = _maturityDate;
        this._notional = _notional;
        this._currency = _currency;
        this._couponRate = _couponRate;
    }

    get instrumentId(): String {
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

    get couponPercentage(): string {
        return (this._couponRate * 100).toFixed(2);
    }

    static deserialize(input: any): Bond {
        let newBond = new Bond(
            input.instrumentId,
            input.issuer,
            input.issuerImg,
            new Date(Date.parse(input.maturityDate)),
            input.notional,
            Currency[input.currency],
            input.couponRate
        );
        console.log("here we go:" + newBond);
        return newBond;
    }
}
