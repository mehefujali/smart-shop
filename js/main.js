const lodeAllProduct = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      displayProducts(data.products)

}

lodeAllProduct()

const displayProducts = (data) => {
      const productContainer = document.getElementById("productsContainer")
      data.map(product => {
            const { title, thumbnail } = product
            const productCard = document.createElement("div")
            productCard.classList = " flex flex-col gap-3 border rounded-lg border-blue-300 p-6"
            productCard.innerHTML = `
            <img src="${thumbnail}">
                   <h1 class=" text-2xl">${title}</h1>
            `

            productContainer.appendChild(productCard)
      })
}