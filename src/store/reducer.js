const initalvalue = {
    product: [],
    totalproduct: 0
}
export const Itemreducer = (state = initalvalue, action) => {
    switch (action.type) {
        case 'cart_incre': {
            return {
                ...state,
                product: [...state.product, action.product],
                totalproduct: state.totalproduct + 1
            }
        }
        case 'cart_decre': {
            const tempdata = [...state.product]
            const currenttemp = tempdata.filter((data) => data.id !== action.id)
            return {
                ...state,
                product: currenttemp,
                totalproduct: state.totalproduct - 1
            }
        }
        default:
            return state
    }
}
