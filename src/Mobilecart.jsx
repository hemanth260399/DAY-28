import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
const Mobilecart = () => {
    const mobileselector = useSelector((state) => state.Itemreducer)
    const dispatch = useDispatch()

    const [qtypiece, setqtypiece] = useState({})
    const qtychange = (id, e) => {
        let tempdata = { ...qtypiece, [id]: e.target.value }
        setqtypiece(tempdata)
    }
    const caltotal = (product) => {
        let tempqty = qtypiece[product.id] || 1
        return product.price * tempqty
    }
    const total = mobileselector.product.reduce((acc, product) => {
        let totalprice = caltotal(product)
        return acc + totalprice
    }, 0)

    return (
        <>
            <div>
                {mobileselector.product.map((data) => (
                    <div className="card m-5" key={data.id} style={{ maxWidth: 1200, border: 0, borderRadius: 20, Color: "lightseablue" }}>
                        <div className="row no-gutters" >
                            <div className="col-md-3 text-cente r p-2" style={{ borderRight: "2px dashed" }}>
                                <img src={data.image} alt="..." style={{ width: 280, height: 220, borderRadius: 20, }} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h3 className="card-title">{data.title}</h3>
                                    <p className="card-text">Brand : {data.brand}</p>
                                    <p className="card-text">Descrption : {data.description}</p>
                                    <p className="card-text">Category : {data.category}</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card-body text-center">
                                    <input type="number" name="qty" id="qty" value={qtypiece[data.id] || 1} min={1} max={data.stock} placeholder="1" style={{ textAlign: "center", width: 40 }} onChange={(e) => qtychange(data.id, e)} />
                                    <h5 className="card-title mt-5 ">${caltotal(data)}</h5>
                                    <button className="card-text mt-5" onClick={() => dispatch({ type: "cart_decre", id: data.id })} style={{ border: 0, color: "red", backgroundColor: "white" }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 0px 20px" }}>
                    <h4>Sub Price</h4>
                    <h5>${total}</h5>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 0px 20px" }}>
                    <h4>Shipping</h4>
                    <h5>FREE</h5>
                </div>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 0px 20px" }}>
                    <h4>Total Price</h4>
                    <h5>${total}</h5>
                </div>
            </div>
        </>
    )

}
export default Mobilecart