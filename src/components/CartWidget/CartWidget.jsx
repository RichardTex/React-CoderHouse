import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
    return (
        <div style={{display: `flex`, marginRight:"20px", alignItems: `center`, width: `30%`, justifyContent: `space-between`}}>
            <FaCartShopping size={30}/>
            1
        </div>
    )
}

export default CartWidget;