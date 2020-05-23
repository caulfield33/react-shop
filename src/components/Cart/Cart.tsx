import React, {useState} from 'react'
import styled from "styled-components";
import {BoxShadow} from "../../styled";
import HeaderAction from "../Header/HeaderAction";
import {IApplicationState} from "../../models/IApplicationState";
import {useDispatch, useSelector} from "react-redux";
import {objectToArray} from "../../services/utils";
import {removeItemFromCart} from "../../store/cart/actions";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
    position: relative;
`

const CartBody = styled(BoxShadow)`
    position: absolute;
    right: 0;
    padding: var(--small);
    background: white;
    max-height: 220px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
`
const List = styled.div`
    overflow-x: auto;
    display: flex;
    flex-direction: column;
`
const Empty = styled.p`
    width: max-content;
`

const CheckOut = styled(Link)`
    padding: 5px 0;
    border-bottom: 1px solid var(--grey1);
`

type Props = {}
const Cart: React.FC<Props> = () => {

    const dispatch = useDispatch()

    const {items} = useSelector((state: IApplicationState) => state.cart);

    const [isOpen, setOpen] = useState(false)

    const openCartHandler = () => setOpen(prevState => !prevState)

    const removeItemFromCartHandler = (itemId: number) => {
        dispatch(removeItemFromCart(`${itemId}`))
    }

    const itemsList = objectToArray(items).reverse();

    return (
        <Wrapper>
            <HeaderAction active={isOpen} label={'Cart'} callback={openCartHandler}/>
            {isOpen && (
                <CartBody>
                    <CheckOut to={'/checkout'}>Go To checkout</CheckOut>

                    <List>
                        {itemsList.length === 0 ? (
                                <Empty>Cart is empty</Empty>
                            ) :
                            (
                                itemsList.map((item, index) => (
                                    <CartItem
                                        item={item}
                                        removeItem={removeItemFromCartHandler}
                                        key={index}>
                                    </CartItem>
                                ))
                            )
                        }

                    </List>

                </CartBody>
            )}
        </Wrapper>
    )
}


export default Cart;