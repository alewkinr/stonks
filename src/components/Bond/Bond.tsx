import React from "react"
import { connect } from "react-redux"
import { BondView } from "./Bond.view"

type Bond = {
    title: string
    logoURL: URL
    amount: number
    expireDate: Date
    interest: number
}
type BondState = {
    bond: [Bond]
}

type BondDispatch = {
    /* your dispatchs */
}

export type BondProps = BondState & BondDispatch

const Bond: React.FC<BondProps> = (props) => {
    return <BondView {...props} />
}

const mapStateToProps = (/* your global app state type */): BondState => {
    return { bond:  }
}

const mapDispatchToProps: BondDispatch = {
    // your dispatchs
}

export default connect(mapStateToProps, mapDispatchToProps)(Bond)
