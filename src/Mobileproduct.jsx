import { useDispatch } from "react-redux";
import PropTypes from "prop-types"
const Mobilecard = ({ id, image, title, discountPercentage, price, category, rating, available, description, stock, brand }) => {
    const dispatch = useDispatch();
    const cartincre = () => {
        return (
            dispatch({
                type: 'cart_incre',
                product: { id, image, title, discountPercentage, price, category, rating, description, stock, brand }
            })
        )
    }
    const cartdecre = () => {
        return (
            dispatch({
                type: 'cart_decre',
                id: id
            })
        )
    }
    return (
        <>
            <div className="card-deck text-center" style={{ width: "25rem", display: "inline-flex", margin: "40px 10px 10px 60px", textAlign: "center", }} key={id}>
                <div className="card" style={{ height: "535px", borderRadius: 20, background: "radial-gradient(circle, rgba(182,248,243,1) 75%, rgba(9,24,244,1) 100%)" }}>
                    <img src={image} className="card-img-top" alt={title} style={{ width: 368, height: 240, borderRadius: "20px 20px 0px 0px" }} />
                    <div className="card-body" style={{ display: "inline-block", }}>
                        <h4 className="card-title p-2" style={{ backgroundColor: "darkblue", color: "white", borderRadius: "20%" }}> {title}</h4>
                        <h4 style={{ color: "red", fontWeight: "bolder" }}>Price:${price}</h4>
                        <p>Category:{category}</p>
                        <p>Rating:{rating}</p>
                        {available ? (<button type="button" className="btn btn-outline-dark m-2" onClick={cartdecre} style={{ backgroundColor: "orange", color: "white" }}>Remove from Cart</button>)
                            :
                            (<button type="button" className="btn btn-outline-dark m-2" onClick={cartincre} style={{ backgroundColor: "red", color: "white" }}>Add to Cart</button>)}
                    </div>
                </div>
            </div>
        </>
    )
}
Mobilecard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    discountPercentage: PropTypes.number,
    price: PropTypes.number,
    category: PropTypes.string,
    rating: PropTypes.number,
    available: PropTypes.bool,
    description: PropTypes.string,
    stock: PropTypes.number,
    brand: PropTypes.string,
    title: PropTypes.string
}
export default Mobilecard;
