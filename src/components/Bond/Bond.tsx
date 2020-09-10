import React from "react"
import { connect } from "react-redux"
import { BondView } from "./Bond.view"
import { Bond } from "../../common/types"

type BondState = {
    bond: Array<Bond>
}

type BondDispatch = {
    /* your dispatchs */
}

export type BondProps = BondState & BondDispatch

const Bond: React.FC<BondProps> = (props) => {
    return <BondView {...props} />
}

const mapStateToProps = (/* your global app state type */): BondState => {
    // todo: fix
    return { bond: undefined }
}

const mapDispatchToProps: BondDispatch = {
    // your dispatchs
}

export default connect(mapStateToProps, mapDispatchToProps)(Bond)
