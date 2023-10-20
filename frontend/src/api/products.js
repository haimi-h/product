const API_URL = "http://localhost:3000/products"
export async function getProductsAPI(){
    return fetch(API_URL)
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}
export async function postProductsAPI(product){
    return fetch(API_URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(resp => {
        return resp.json()
    })
    .then(data => data)
    .catch(e => console.log(e))
}
export async function patchProductsAPI(id, isAvailable){
    let product = {
        _id: id,
        isAvailable: isAvailable
    }
    return fetch(API_URL+`/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}
export async function deleteProductsAPI(id){
    return fetch(API_URL+`/${id}`,{
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => data)
    .catch(e => console.log(e))
}