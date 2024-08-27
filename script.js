    
const burgerToggle = () =>{
    const hamBurger = document.getElementById("Nav")
    hamBurger.classList.toggle("open")
}
document.getElementById("HamBurger").addEventListener("click", burgerToggle)



// const closeToggle = () =>{
//     const Close = document.getElementById("Nav")
//     Close.classList.toggle("open")
// }
// document.getElementById("cancel").addEventListener("click", closeToggle)


// new Date().getFullYear()

// const dropDown = () => {
//     const drop = document.getElementById("Close")
//     drop.classList.toggle("close")
// }
// document.getElementById("DropDown").addEventListener("click", dropDown)
// const dropDown1 = () => {
//     const drop = document.getElementById("Close1")
//     drop.classList.toggle("close")
// }
// document.getElementById("DropDown1").addEventListener("click", dropDown1)
// const dropDown2 = () => {
//     const drop = document.getElementById("Close2")
//     drop.classList.toggle("close")
// }
// document.getElementById("DropDown2").addEventListener("click", dropDown2)

function productWarpper() {
    

const productHolder = [
    {
        id: 1,
        Image: "./Unicoz/images/cat_1.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 2,
        Image: "./Unicoz/images/cat_2.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 3,
        Image: "./Unicoz/images/cat_3.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 4,
        Image: "./Unicoz/images/cat_4.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 5,
        Image: "./Unicoz/images/cat_5.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 6,
        Image: "./Unicoz/images/cat_6.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 7,
        Image: "./Unicoz/images/cat_1.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
    {
        id: 8,
        Image: "./Unicoz/images/cat_1.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price:2000,
    },
    {
        id: 9,
        Image: "./Unicoz/images/cat_1.jpg",
        type: "Sneakers",
        name: "Jacquard Shelt Cloth",
        price: 2000,
    },
]

const productContain = document.getElementById("ProductHolder")

productHolder.map(item =>{
    const Pcards = document.createElement("div")
    Pcards.className = "Product"
    Pcards.innerHTML = `
    <div class="ImgHolder">
    <img src="${item.Image}">
    </div>
    <div class="DetailHolder">
    <div class="LeftDetail">
    <p>${item.type}</p>
    </div>
    <div class="RightDetail">
    <b>J${item.name}</b>
    <b>₦ ${item.price}.00</b>
    </div>
    <button class="cartButton" onclick= "addToCart('${item.Image}', '${item.price}', '${item.name}', '${item.id}')">Add to cart</button>
    </div>
    `
    productContain.appendChild(Pcards)
    console.log(Pcards)
})
}
console.log(productWarpper())



// let cartItems = []
// console.log(cartItems)



function addToCart(Image, price, name, id) {
 
    let cartItems = JSON.parse(localStorage.getItem("productHolder")) || []
    const product = {Image: Image, price:price, name:name, id:id}
       console.log("atre", cartItems)

    const productExist = cartItems.find(item => item.id === id)
    if(productExist){
        productExist.quantity += 1
    }else{
        product.quantity = 1
        cartItems.push(product)
    }

    updateCart()
    localStorage.setItem("productHolder", JSON.stringify(cartItems))

    console.log(cartItems)

    

}

    function updateCart() {
        let cart = JSON.parse(localStorage.getItem("productHolder")) || []

        let totalQuantity = cart.reduce((acc, item)=> acc + item.quantity, 0)
        // document.getElementById("cartCount").innerText = totalQuantity
        
    }



// function addToCart(id, price, name) {
//     const product = {id:id, price:price, name:name, quantity:1}

//     let itemExists = false

//     cartItems.forEach((item)=>{
//         if(item.id === id){
//             itemExists.quantity += 1
//             itemExists = true
//         }
//     })

//     if(!itemExists){
//         cartItems.push(product)
//     }
//     updateCart()
// }


// function updateCart(){
//     const cartList = document.getElementById("cartItems")
//     cartList.textContent = ""

//     let total = 0

//     cartItems.map((item   )=>{
//         const list = document.createElement("div")
//         list.className = "cartItem"
//         list.innerHTML = `
//         name: ${item.name} - Quantity:
//         <button onClick = "decreaseQty(${item.id})"> - </button>
//         ${item.quantity}
//         <button onClick = "increaseQty(${item.id})"> + </button>
//         - Price ${item.price * item.quantity}
//         `

//         cartList.appendChild(list)

//         total += item.price*item.quantity

//         return list
//     })

//     document.getElementById("cartTotal").textContent = total.toFixed(2)
// }

function increaseQty(id) {
    cartItems.map((item) =>{
        if (item.id === id) {
            item.quantity = item.quantity + 1
        }
    })
    updateCart()
}
function decreaseQtycreaseQty(id) {
    cartItems.map((item) =>{
        if (item.id === id && item.quantity > 1) {
            item.quantity = item.quantity - 1
        }
    })
    updateCart()
}

// function updateCart() {
//     const cartList = document.getElementById("cartItems")
//     cartList.textContent = ""

//     let total = 0

//     cartItems.map((item)=>{
//         const list = document.createElement("li")
//         list.innerHTML = `
//         product name: ${item.name} - Quantity:
//         <button onClick= "decreaseQty(${item.id})"> - </button>
//         ${item.quantity}
//         <button onClick= "increaseQty(${item.id})"> + </button>
//         - Price ${item.price * item.quantity}
//         `

//         cartList.appendChild(list)
//         total += item.price * item.quantity

//         return list

//     })

    document.getElementById("cartTotal").textContent = total.toFixed(2)












function increment() {
    // Get the current value
    var currentValue = parseInt(document.getElementById('value').innerHTML);
    
    // Increment the value
    var newValue = currentValue + 1;
    
    // Update the display
    document.getElementById('value').innerHTML = newValue;
  }

  
  function decrement() {

    var currentValue = parseInt(document.getElementById('value').innerHTML);

    if(currentValue < 2){

}else{
       var newValue = currentValue - 1;
       document.getElementById('value').innerHTML = newValue;
}
    }

    





