import React, { useEffect, useState } from 'react';
import { getProductById } from "../services/products.service";


export const useItemById = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById().then((res) => {
            console.log(res);
        });
    },[]);

return {product}
};
