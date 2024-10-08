import React from 'react'
import img5 from '/img5.png'

const Trending = () => {
  return (
    <section id='trendingSection'>
        <div className="container mx-auto p-[10px]">
            <h2>Trending Product</h2>
            <div className="">
                <div className="">
                    <img src={img5} alt="" />
                </div>
                <div className="">
                    <h3>Title</h3>
                    <p>Price</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending