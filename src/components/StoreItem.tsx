import React from 'react'
import {IStoreItem} from "../models/IStoreItem";
import {IMyStoreItem} from "../models/IMyStoreItem";
import styled from "styled-components";
import {BoxShadow, Button} from "../styled";

const Wrapper = styled(BoxShadow)`
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    margin: 10px;
`

const ItemImage = styled.img`
    margin-left: -1px;
`

const AddButton = styled(Button)`
    width: fit-content;
`

const ItemActions = styled.div`
    display: flex;
    justify-content: space-around;
    margin: var(--small) 0;
`

export type StoreItemCardProps = {
    item: IStoreItem | IMyStoreItem,
    addToCart?: (itemId: number) => void
    removeFromCart?: (itemId: number) => void | null
}

const StoreItemCard: React.FC<StoreItemCardProps> = ({item, addToCart, removeFromCart}) => {

    return (
        <Wrapper>
            <ItemImage src={'https://via.placeholder.com/200'} alt={item.name} />
            {item.name}

            <ItemActions>
                {addToCart && <AddButton onClick={() => addToCart ? addToCart(item.id) : null }> Add </AddButton>}
                {removeFromCart && <AddButton color={'var(--error)'} onClick={() => removeFromCart ? removeFromCart(item.id) : null }> Remove </AddButton>}
            </ItemActions>
        </Wrapper>
    )
}

export default StoreItemCard
