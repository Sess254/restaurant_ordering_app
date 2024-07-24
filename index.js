const menuEl = document.getElementById('menu-el')
const ordersEl = document.getElementById('orders-el')
const totalEl = document.getElementById('totals-el')
const ordersArray = []
let totalPrice = 0

import { menuArray } from "./data.js"

function getMenuHtml(){
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

function renderAll(){
  menuEl.innerHTML = getMenuHtml()
  totalEl.innerHTML = getTotalHtml()
  ordersEl.innerHTML = getOrderHtml()
}

renderAll()

document.addEventListener('click', (e) =>{
  if (e.target.dataset.add){
    (addOrders(e.target.dataset.add))
  } else if (e.target.dataset.delete){
    removeOrders(e.target.dataset.delete)
  } else if (e.target.dataset.complete){
    console.log(`modal shown`)
  }
})

function addOrders(orderId){
  const targetOrderObj = menuArray.filter(order =>{
      return order.id === parseInt(orderId)
  })[0]

  if (!ordersArray.includes(targetOrderObj)){
    ordersArray.push(targetOrderObj)
    totalPrice += targetOrderObj.price
    renderAll()
  }
}

function removeOrders(orderId) {
  let targetOrderObj = menuArray.find(order =>{
    return order.id === parseInt(orderId)
  })

  if (ordersArray.includes(targetOrderObj)){
    const index = ordersArray.indexOf(targetOrderObj)
    ordersArray.splice(index, 1)
    totalPrice -= targetOrderObj.price
    renderAll() 
  }
}

function getOrderHtml() {
  let orderHtml = ''
  ordersArray.forEach(item =>{
    orderHtml += ` 
      <div class="orders-container">
          <ul>
              <li><span>${item.name} <button class="remove" data-delete="${item.id}">remove</button> </span><span>$${item.price}</span></li>
          </ul>
      </div> 
      `
  })

  return orderHtml

}


function getTotalHtml(){
  let totalHtml = ''
  if (ordersArray.length > 0){
    totalHtml = ` 
    <div class="total-orders">
        <p class="total-order"><span>Total orders:</span> <span>$${totalPrice}</span></p>
        <button class="complete-btn"  id="complete-btn" data-complete="modal">Complete Order</button>
    </div>`

  } else {
    totalHtml = ''
  }
  
  return totalHtml
  console.log(ordersArray)
 
  }
  

function renderTotalHtml(){
 
  
}

function renderOrderHtml() {
  
  console.log(totalPrice)
}
