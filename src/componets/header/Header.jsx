import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { food } from '../../redux/api'
import './Header.css'

function Header() {

    const { api } = useSelector((state) => state.dishes)
    const { cartList } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
            dispatch(food(res.data))

        })
    }, [])

    const totalCartCount = cartList.reduce((acc, value) => (acc += value.count), 0)

    // const totalCartCountAdd =+ cartList.length
    // const totalCartCount = cartList.length-totalCartCountAdd
    // console.log(cartList.length, "Length===<<<");

    return (
        <>
            <div >
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight fs-3 text-muted"><b>{api[0]?.restaurant_name}</b></div>
                    <div className="p-2 bd-highlight text-muted mt-2">My Orders</div>
                    <div className="p-2 bd-highlight">
                        <div className='right-section'>
                            <i className="fa-solid fa-cart-shopping fa-xl mt-4" style={{ color: "#808081" }} />
                            <span className='cart-count-header mt-3'>{totalCartCount}</span>
                            <i />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header