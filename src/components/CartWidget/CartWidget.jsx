import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
    return (
        <div style={{display: `flex`, marginRight:"20px", alignItems: `center`, width: `30%`, justifyContent: `space-between`}}>
            <FaCartShopping size={30}/>
            10
        </div>
    );
};
