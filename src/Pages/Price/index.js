import React from 'react'
import PriceCard from '../../Components/module/PriceCard'
import pack from './pack.json'
const {data} = pack

const Price = () => {
  return (
    <div id="price">
      <h1 className='headline'>Price</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus, porro laudantium sunt maxime provident atque excepturi a odit hic.</p>
      <div className='price-container'>
        {data.map(data => {
          return <PriceCard key={data.title} title={data.title} features={data.features} price={data.price} />
        })}
      </div>
    </div>
  )
}

export default Price