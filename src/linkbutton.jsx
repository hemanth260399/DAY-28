import { Link, Outlet } from 'react-router-dom'
import "./App.css"
import { useSelector } from 'react-redux'
const Topbutton = () => {
    const totalcount = useSelector((state) => state.Itemreducer)
    return (
        <>
            <div className='header'>
                <Link to="/" style={{ backgroundColor: "blue", color: "white", padding: 7, borderRadius: 15 }}>Mobile Shopping Area </Link>
                <Link to="/cart" style={{ backgroundColor: "blue", color: "white", padding: 7, borderRadius: 15 }}>Cart {totalcount.totalproduct}</Link>
            </div>
            <Outlet />
        </>
    )
}
export default Topbutton;