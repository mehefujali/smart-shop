const lodeAllProduct = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()

      spnner(data.products)

}

lodeAllProduct()
const spnner = (data) => {
      const spnner = document.getElementById("spnner")
      spnner.classList.remove("hidden")
      setTimeout(() => {
            spnner.classList.add("hidden")
            displayProducts(data)
      }, 2000)

}
const displayProducts = (data) => {
      const productContainer = document.getElementById("productsContainer")
      data.map(product => {
            const { title, thumbnail, price, discountPercentage } = product
            const productCard = document.createElement("div")
            productCard.classList = " flex flex-col gap-3 border rounded-lg border-blue-300 p-6 product-card"
            productCard.innerHTML = `
            <img src="${thumbnail}">
                   <h1 class=" text-xl md:text-2xl font-bold">${title}</h1>
                   <p>$${price}</p>
            `

            productContainer.appendChild(productCard)
      })
}