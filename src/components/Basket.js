import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, products, total, resetBasket }) {
    return (
        <div className='basket-container container'>

            <h3>Alışveriş Detayları</h3>

            <ul>
                {basket.map(item => (
                    <BasketItem item={item} product={products.find(p => p.id === item.id)} />
                ))}
            </ul>

            <div className='total'>
                Toplam: {total} TL
            </div>

            <button className='reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>

        </div>
    )
}

export default Basket