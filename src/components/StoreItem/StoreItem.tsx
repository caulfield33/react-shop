import React, {useEffect} from 'react';
import styled from "styled-components";
import {useParams} from "react-router";
import {connect, useDispatch} from "react-redux";
import {clearItems, itemRequest} from "../../store/store/actions";
import {StoreState} from "../../store/store/types";
import {IApplicationState} from "../../models/IApplicationState";
import {BoxShadow} from "../../styled/BoxShadow";
import {IStoreItem} from "../../models/IStoreItem";
import {ItemImage} from "../StoreItem";
import {objectToArray} from "../../services/utils";

const Wrapper = styled(BoxShadow)`
    width: fit-content;
    margin: 20px;
    display: flex;
`;

const ItemPropertyList = styled.ul`

`

const ItemPropertyItem = styled.li`
    
`

type ItemInfoRow = {
    key: string;
    value: any;
}

type Props = {} & StoreState
const StoreItem: React.FC<Props> = React.memo(({items, loading}) => {
    const {itemId} = useParams()

    const dispatch = useDispatch();


    useEffect(() => {
        //TODO add single item request
        dispatch(itemRequest(itemId))

        return () => {
            dispatch(clearItems())
        }
        // eslint-disable-next-line
    }, [])


    const item: IStoreItem | null = items[0] ? items[0] : null;

    if (item === null) return null;

    const itemInfo: ItemInfoRow[] = [];

    const infoArray: any[] = objectToArray(item)

    Object.keys(item).forEach((key, index) => {
        itemInfo.push({key: key, value: infoArray[index]})
    })


    return (
        <Wrapper>
            <ItemImage src={'https://via.placeholder.com/200'} alt={item.name}/>

            <ItemPropertyList>
                {itemInfo.map((info, index) => (
                    <ItemPropertyItem key={index}>
                        {info.key}: {info.value}
                    </ItemPropertyItem>
                ))}
            </ItemPropertyList>
        </Wrapper>
    )
});

const mapStateToProps = ({store}: IApplicationState) => ({
    ...store,
})

export default connect(mapStateToProps)(StoreItem);


