import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { food } from '../../redux/api'
import { categoryClick } from '../../redux/dishes'
import CounterButton from './countButton'
import './Dishes.css'

function Dishes() {

    const { api } = useSelector((state) => state.dishes)
    const { categoryList } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
            dispatch(food(res.data))
        })
    }, [])

    return (

        <>
            {/* ==================Categoty Tabs Starts========================  */}

            {api && api.map((categories, index) => (

                <div key={index}>
                    <nav className="navbar navbar-expand-sm shadow p-4 mb-4 ">
                        <div className="container-fluid overflow ">
                            <div className="navbar-nav ml-auto flex-row">

                                {categories.table_menu_list.map((table_menu, index) => (

                                    <a className="nav-link ms-5  fs-4 text-capitalize text-muted"
                                        // onClick={() => { (table_menu.category_dishes) }}>
                                        onClick={() => dispatch(categoryClick(table_menu.category_dishes))}>
                                        <div key={index}></div>
                                        <b>
                                            {table_menu.menu_category}
                                        </b>
                                    </a>
                                ))
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            ))}
            {/* ==================Categoty Tabs End========================  */}

            {/* =======================Dishes List Starts===================== */}

          
                    {categoryList && categoryList.map((filterDishes) => (

                        <div className="container overflow border-bottom">
                            <div className="row gx-1">
                                <div className="col">
                                    <div className="mt-2 float-end">
                                        <img src="./images/veg.jpg" style={{ height: "20px", width: "20px" }} alt="" />
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="p-1 mt-2"><h5><b>{filterDishes?.dish_name}</b></h5>
                                        <h6 className='text-nowrap'><b>{filterDishes?.dish_currency} {filterDishes?.dish_price}</b></h6>
                                        <h6 className='text-muted '>{filterDishes?.dish_description}</h6>

                                        {filterDishes?.dish_Availability === false ?
                                            <> <h6 style={{ color: 'red' }}>Not Available</h6> </> : <CounterButton product={filterDishes} />
                                        }

                                        {filterDishes?.addonCat.length === 0 ?
                                            <></> : <h6 style={{ color: 'red' }}>Customization Available</h6>
                                        }

                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="pt-5 text-muted text-center">
                                        <h6><b>{filterDishes?.dish_calories} Calories</b></h6>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="text-center">
                                        <img src={filterDishes?.dish_image} className='rounded mt-4' style={{ height: "20vh", width: "100%" }} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
        
            {/* =======================Dishes List End===================== */}
        </>
    )
}

export default Dishes