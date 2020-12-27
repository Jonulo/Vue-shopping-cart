/*
  * Destructuring Context object 
  * Contexts object has {state, commit, dispatch, rootState} */
export async function fetchProducts({ commit }) {
  /* 
   * Solo usamos commit porque en este caso vamos a recibir y establecer
    * los datos en el state 
  */
  const data = await fetch('/fixtures/products.json')
  const products = await data.json()
  /* 
   * Como este módulo tiene NAMESPACE debemos llamarlo de esta forma:  
    * commit('nombreModulo/nombreMutation', data, desde el root de la store)
  */
  commit('products/setProducts', products, {root: true})
}
