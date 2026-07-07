export const searchProducts = (products, query) => {
    if(!query) return[]

    return products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    )
}