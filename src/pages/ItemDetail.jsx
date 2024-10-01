import React from 'react'
import { ItemDetailContainer } from '../components/';
import { useItemById } from '../hooks';

export const ItemDetail = () => {

    const {} = useItemById();
    return <ItemDetailContainer />
};
