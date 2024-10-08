import React from 'react'

//importar estilos
import './cart.css'

function Cart({cartItems, handleAddPd, handleRemovePd}) {

    /*Calcular el precio total de los productos en el carrito*/
    const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <div className='cart-items'>
    <div className='cart-header'>Items del Carrito</div>

    {cartItems.length === 0 && (
        <div className='cart-empty'> El carrito está vacío</div>
    )}
    <div>
        {cartItems.map((item) => (
            <div className='cart-row'>
                <div key={item.id} className='cart-list'>
                    <img className='cart-img' src={item.image} alt={item.name}/>
                    <div style={{ fontStyle: "italic" }} className='cart-name'>{item.name}

                    {/*Agregar botones de agregar y eliminar */}
                    <button className='cart-add' onClick={() => handleAddPd(item)}>+</button>
                    <button className='cart-delete'onClick={() => handleRemovePd(item)}>-</button>
                    </div>
                    <div className='cart-price'>
                    {/* Formatear el precio del producto para que tenga los separadores de miles pero sin decimales*/}
                    {item.qty} x ${item.price.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} COP
                    </div>

                    <div className='cart-total'>
                    {/* Formatear el precio del producto para que tenga los separadores de miles pero sin decimales*/}
                    Total: ${(totalPrice).toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} COP
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>

  )
}

export default Cart