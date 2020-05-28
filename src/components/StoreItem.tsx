import React, {useEffect, useState} from 'react'
import {IStoreItem} from "../models/IStoreItem";
import {IMyStoreItem} from "../models/IMyStoreItem";
import styled from "styled-components";
import {BoxShadow, Button} from "../styled";
import {useSelector} from "react-redux";
import {IApplicationState} from "../models/IApplicationState";
import {Link} from "react-router-dom";

const Wrapper = styled(BoxShadow)`
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    margin: 10px;
`

export const ItemImage = styled.img`
    margin-left: -1px;
`

const AddButton = styled(Button)`
    width: fit-content;
`

const ItemActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin: var(--small) 0;
    padding: 0 var(--small);
`

export type StoreItemCardProps = {
    item: IStoreItem | IMyStoreItem;
    addToCart: (item: IStoreItem) => void;
    removeFromCart: (itemId: number) => void | null;
}

const StoreItemCard: React.FC<StoreItemCardProps> = React.memo(({item, addToCart, removeFromCart}) => {

    const [selected, setSelected] = useState(false)

    const cart = useSelector((state: IApplicationState) => state.cart);

    useEffect(() => {
        if (selected !== !!cart.items[item.id]) {
            setSelected(!!cart.items[item.id])
        }
        // eslint-disable-next-line
    }, [cart])

    const addHandler = () => {
       addToCart(item)
       setSelected(true)
    }

    const removeHandler = () => {
        removeFromCart(item.id)
        setSelected(false)
    }

    return (
        <Wrapper>
            <Link to={`item/${item.id}`}>
                <ItemImage src={'https://via.placeholder.com/200'} alt={item.name} />
            </Link>
            {item.name}

            <ItemActions>
                {addToCart && <AddButton onClick={addHandler}> Add </AddButton>}
                {selected && <AddButton color={'var(--error)'} onClick={removeHandler}> Remove </AddButton>}
            </ItemActions>
        </Wrapper>
    )
})

export default StoreItemCard
