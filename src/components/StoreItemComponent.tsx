import React from 'react'
import {IStoreItem} from "../models/IStoreItem";
import {IMyStoreItem} from "../models/IMyStoreItem";
import styled from "styled-components";
import {BoxShadow} from "../styled";

const Wrapper = styled(BoxShadow)`
    display: flex;
    flex-direction: inherit;
    height: fit-content;
    width: 100%;
    text-align: center;
    margin: var(--small);
    padding: var(--small);
`

const ItemImage = styled.img`
    height: 64px;
    margin-right: var(--small);
`

const InfoList = styled.ul`
    margin: 0;
        text-align: left;
`

export type StoreItemCardProps = {
    item: IStoreItem | IMyStoreItem
}

const StoreItemComponent: React.FC<StoreItemCardProps> = ({item}) => {

    return (
        <Wrapper>
            <ItemImage src={'https://via.placeholder.com/200'} alt={item.name}/>
            <InfoList>
                <li>Name: {item.name}</li>
                <li>Price: {item.price}</li>
                <li>Rate: {item.rate}</li>
            </InfoList>
        </Wrapper>
    )
}

export default StoreItemComponent
