const menuEl = document.getElementById('menu-el')
const ordersEl = document.getElementById('orders-el')
const totalEl = document.getElementById('totals-el')
const ordersArray = []

import { menuArray } from "./data.js"

function getMenuItems(){
    const menuItemsHtml = menuArray.map(menu =>{
        return `
        <section class="menu">
            <div class="menu-items">
                    <div class="food">
                        <img src="${menu.emoji}" class="food-img">
                        <div class="food-desc">
                            <h2>${menu.name}</h2>
                            <p>${menu.ingredients}</p>
                            <h2>$${menu.price}</h2>
                        </div>
                    </div>
                    <div class="add-btn">
                        <i class="fa-regular fa-plus" data-add="${menu.id}"></i>
                    </div>
            </div>
        </section>
        `
    }).join('')

    return menuItemsHtml

}
function render(){
    menuEl.innerHTML = getMenuItems()
}

render()

document.addEventListener('click', (e) =>{
    if (e.target.dataset.add){
        addOrders(e.target.dataset.add)
    }
})

function addOrders(orderId){
    const targetOrderObj = menuArray.filter(order =>{
        return order.id === parseInt(orderId)
    })[0]

    
    ordersArray.push(targetOrderObj)
    let totalPrice = 0
    ordersArray.forEach(order =>{
        totalPrice += order.price
    })

    if (ordersArray){
        totalEl.innerHTML = ` 
        <div class="total-orders">
            <p class="total-order"><span>Total orders:</span> <span>$${totalPrice}</span></p>
            <button  id="complete-order">Complete Order</button>
        </div>`
    }
    
    ordersEl.innerHTML = ''

    const orderHtml = ordersArray.map(item =>{
        return ` 
        <div class="orders-container">
            <ul>
                <li><span>${item.name} <i class="fa-regular fa-trash-can" data-delete="1"></i> </span><span>$${item.price}</span></li>
            </ul>
        </div> 
        `
    })

    ordersEl.innerHTML += orderHtml
   
    console.log(ordersArray)
}