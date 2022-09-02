import React from 'react'

const PriceCard = ({title, features, price, image}) => {
  return (
    <div className='price-card'>
      <img src={image || ""} alt="" />
      <h2>{title}</h2>
      <hr />
      <ul>
        {features.map(feature => <li key={feature}>{feature}</li>)}
      </ul>
      <div className='priceitem'>{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(price)}</div>
    </div>
  )
}

export default PriceCard