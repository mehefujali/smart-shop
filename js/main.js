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
            const { title, thumbnail, price, discountPercentage, rating, category } = product
            const newPrice = price - (discountPercentage / 100) * price
            const productCard = document.createElement("div")
            productCard.classList = " flex flex-col gap-1 border rounded-lg border-yellow-300 p-6 product-card hover:shadow-md justify-between"
            productCard.innerHTML = `
            <img src="${thumbnail}">
                   <h1 class=" text-xl md:text-2xl font-bold">${title}</h1>
                   <div class="badge badge-outline">${category}</div>
                   <div class=" flex flex-wrap gap-3">
                   <p class=" "><span class="line-through">$${price}</span>    <span class="text-green-400 font-bold">${discountPercentage}%</span> </p>
                   <p class=" font-bold">$${newPrice.toFixed(2)}</p>
                   
                   </div>
                   <p class="${rating >= 3 ? "text-black" : "text-red-500"}" ">${rating} <span class=" ${rating >= 3 ? "text-yellow-500" : "text-red-500"}"><i class="fa-solid fa-star"></i></span></p>

                   <div class=" border-b-gray-500"></div>

                   <div class=" flex gap-2 ">
                   <button class=" btn bg-yellow-400   flex-grow"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                   <button class=" btn bg-green-400 flex-grow"><i class="fa-solid fa-store"></i> Buy now</button>
                   </div>


            `

            productContainer.appendChild(productCard)
      })
}