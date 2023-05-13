import React, { useState } from 'react'
import './Products.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {

    const [animationParent] = useAutoAnimate()
    const [MenuProducts, setMenuProduct] = useState(ProductsData)
    const filter = (type) => {
        setMenuProduct(ProductsData.filter((product) => product.type === type))
    }
    return (
        <div className='container'>
            <img src={Plane} alt="" />
            <h1>Our Feature Products</h1>
            <div className="products">
                <ul className="menu">
                    <li onClick={() => setMenuProduct(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skin Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioner</li>
                    <li onClick={() => filter("foundation")}>Foundation</li>
                </ul>
                <div className="list" ref={animationParent}>
                    {
                        MenuProducts.map((product, i) => (
                            <div className="product">
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}</span>
                                    <div>Show now</div>
                                </div>
                                <img src={product.img} alt="" className='img-p' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
