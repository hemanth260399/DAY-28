import mobiledata from "./Mobile.json"
import { useSelector } from "react-redux"
import Mobilecard from "./Mobileproduct"
const Mobiledata = () => {
    const mobileselector = useSelector((state) => state.Itemreducer)
    return (
        <>
            {console.log(mobileselector)}
            {mobiledata.map((data) => (
                <Mobilecard
                    key={data.id}
                    {...data}
                    available={Boolean(mobileselector.product.find((d) => data.id === d.id))}
                />
            ))}
        </>
    )
}

export default Mobiledata;