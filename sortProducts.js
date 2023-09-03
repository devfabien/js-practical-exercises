function sortProducts(products){
    return products.sort((a,b)=> a.price-b.price)
}
console.log(sortProducts([kk={name:"shoes",price:3000}, pp={name:"potato",price:12000}]))