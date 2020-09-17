export enum Currency {
    RUB = "RUB",
}

export class BondPayment {
    constructor(private readonly _date: Date, private readonly _payment: number) {
        this._date = _date;
        this._payment = _payment;
    }

    get date(): Date {
        return this._date;
    }

    get payment(): number {
        return this._payment;
    }
}

export class Bond {
    constructor(
        private readonly _instrumentId: string, // ISIN / CUSIP
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
        private readonly _couponPeriod: number,
        private readonly _price: number,
        private readonly _couponCalendar: Array<BondPayment>
    ) {
        this._instrumentId = _instrumentId;
        this._shortName = _shortName;
        this._name = _name;
        this._issuer = _issuer;
        this._issuerName = _issuerName;
        this._issuerImg = _issuerImg;
        this._maturityDate = _maturityDate;
        this._notional = _notional;
        this._price = _price;
        this._currency = _currency;
        this._couponAnnualPercent = _couponAnnualPercent;
        this._couponCost = _couponCost;
        this._couponPeriod = _couponPeriod;
        this._couponCalendar = _couponCalendar;
    }

    get instrumentId(): string {
        return this._instrumentId;
    }

    get name(): string {
        return this._name;
    }

    get issuer(): string {
        return this._issuer;
    }

    get issuerImg(): string {
        return this._issuerImg;
    }

    get maturityDate(): string {
        return this._maturityDate.toLocaleDateString();
    }

    get notional(): string {
        let ccy;
        switch (this._currency) {
            case Currency.RUB:
                ccy = "₽";
                break;
            default:
                throw "unknown currency";
        }
        return this._notional + " " + ccy;
    }

    get couponAnnualPercent(): string {
        return this._couponAnnualPercent.toFixed(2);
    }

    get couponCalendar(): Array<BondPayment> {
        return this._couponCalendar;
    }

    get couponCost(): number {
        return this._couponCost;
    }

    get price(): number {
        return this._price;
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
            input.couponPeriod,
            input.price,
            input.couponCalendar.map(
                (x) => new BondPayment(new Date(Date.parse(x.date)), x.payment)
            )
        );
    }
}

export class CouponCalendarLine {
    constructor(
        private readonly _date: Date,
        private readonly _issuer: string,
        private _payment: number
    ) {
        this._date = _date;
        this._issuer = _issuer;
        this._payment = _payment;
    }

    get date(): Date {
        return this._date;
    }

    get issuer(): string {
        return this._issuer;
    }

    get payment(): number {
        return this._payment;
    }

    set payment(payment) {
        this._payment = payment;
    }
}
