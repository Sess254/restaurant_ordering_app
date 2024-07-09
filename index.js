const menuEl = document.getElementById('menu-el')

import { menuArray } from "./data.js"

function getMenuitems(){
    const menuItemsHtml = menuArray.map(menu =>{
        return `
        <section class="menu">
            <div class="menu-items">
                    <div class="food">
                        <img src="${menu.emoji}" class="food-img">
                        <div class="food-desc">
                            <h2>${menu.name}</h2>
                            <p>${menu.ingredients}</p>
                            <h2>${menu.price}</h2>
                        </div>
                    </div>
                    <div class="add-btn">
                        <i class="fa-regular fa-plus"></i>
                    </div>
            </div>
        </section>
        `
    }).join('')

    menuEl.innerHTML = menuItemsHtml
}

getMenuitems()