export enum Currency {
    RUB = "RUB"
}

export type Bond = {
    instrumentId: String,   // ISIN / CUSIP
    issuer: String,
    issuerImg: String,
    maturityDate: Date,
    notional: Number,
    currency: Currency,
    couponPercentage: Number
}
