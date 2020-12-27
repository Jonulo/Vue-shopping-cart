export function addProduct (state, product) {
  const productInCart = state.cart.find(({id}) => id === product.id)
  if(!productInCart) {
    const copy = Object.assign({}, product)
    copy.qty = 1
    state.cart.push(copy)
  } else {
    productInCart.qty += 1
  }
}

export function removeProductFromCart (state, product) {
  /*
    * Obtener el objeto product del state
    * Validar si su qty > 1 
    * Si qty > 1 ? spring operator para modificar objeto con qty -1
    * : (Si no) Hacer filter para sacar ese obj del cart
  */
  state.cart = state.cart.filter(({id}) => id !== product.id)
}
