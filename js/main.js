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
            const { title, thumbnail, price, discountPercentage, rating } = product
            const newPrice = price - (discountPercentage / 100) * price
            const productCard = document.createElement("div")
            productCard.classList = " flex flex-col gap-3 border rounded-lg border-blue-300 p-6 product-card hover:shadow-md"
            productCard.innerHTML = `
            <img src="${thumbnail}">
                   <h1 class=" text-xl md:text-2xl font-bold">${title}</h1>
                   <p class=" "><span class="line-through">$${price}</span>    <span class="text-green-400 font-bold">${discountPercentage}%</span> </p>
                   <p class=" font-bold">$${newPrice.toFixed(2)}</p>


            `

            productContainer.appendChild(productCard)
      })
}