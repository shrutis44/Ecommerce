import React from 'react'

const Women = () => {
    return (

        <div class="Ryans" id="RyanSec">
            <div class="head">
                <h1>Ryan <span>Women's Wear</span></h1>
            </div>
            <div class="card">
                <div class="crd">
                    <img src="/women/women1.jpeg" alt="" onclick="show(this)" />
                    <div class="crdText">
                        <h2>Trending Girl Top's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                </div>

                <div class="crd">
                    <img src="/women/women2.jpeg" alt="" onclick="show(this)"/>
                        <div class="crdText">
                            <h2>Trending Girl Top's</h2>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                            <button>Buy Now</button>
                            <button onclick="addCart()">Add to Cart</button>
                        </div>
                </div>

                <div class="crd">
                    <img src="/women/women3.jpeg" alt="" onclick="show(this)" />
                    <div class="crdText">
                        <h2>Trending Girl Top's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                        <button>Buy Now</button>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="cards">
                <div class="crd">
                    <img src="/women/women4.jpeg" alt="" onclick="show(this)" />
                    <div class="crdText">
                        <h2>Cutton Trending Shirt's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                        <button>Buy Now</button>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                </div>

                <div class="crd">
                    <img src="/women/women5.jpeg" alt="" onclick="show(this)" />
                    <div class="crdText">
                        <h2>Cutton Trending Shirt's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                            <button>Buy Now</button>
                            <button onclick="addCart()">Add to Cart</button>
                    </div>
                </div>
                <div class="crd">
                    <img src="/women/women6.jpeg" alt="" onclick="show(this)" />
                    <div class="crdText">
                        <h2>Cutton Trending Shirt's</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br></br>
                        <button>Buy Now</button>
                        <button onclick="addCart()">Add to Cart</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Women;