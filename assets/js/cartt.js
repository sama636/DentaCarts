
// Moblile Nav
const restorativeArrow = document.querySelector(".restorativeArrow")
const restorativeArrowDown = document.querySelector(".restorativeArrowDown")
const restorativeContent = document.querySelector(".restorativeContent")
restorativeArrow.addEventListener("click",function(){
    restorativeArrow.style.display="none";
    restorativeArrowDown.style.display="block";
    restorativeContent.style.display="block";
    const ConsumablesArrow = document.querySelector(".ConsumablesArrow")
    const ConsumablesArrowDown = document.querySelector(".ConsumablesArrowDown")
    const consumablesContent = document.querySelector(".consumablesContent")
    ConsumablesArrow.addEventListener("click",function(){
        ConsumablesArrow.style.display="none";
        ConsumablesArrowDown.style.display="block";
        consumablesContent.style.display="block";
    })
    ConsumablesArrowDown.addEventListener("click",function(){
        ConsumablesArrow.style.display="block";
        ConsumablesArrowDown.style.display="none";
        consumablesContent.style.display="none";
    })
})
restorativeArrowDown.addEventListener("click",function(){
    restorativeArrow.style.display="block";
    restorativeArrowDown.style.display="none";
    restorativeContent.style.display="none";
})


let cart = JSON.parse(localStorage.getItem('cart'));

const prodCont = document.querySelector('.cart-cont .content');
const priceTotal = document.querySelector(".price-total");

displayData(cart);
function displayData(ele){
    const cart = JSON.parse(localStorage.getItem('cart'));
    let elements="";
    cart.forEach((ele) =>{
        elements += `<div class="cart-product flex-column flex-md-row my-5 d-flex align-items-center justify-content-between mx-3" data-id=${ele.id}>
        <div class="itemImg">
            <img class="" src="${ele.Image}" alt="">
        </div>
        <div class="itemTitle">
            <h5 class="cartText text-center mt-4">${ele.title}</h5>
        </div>
        <div class="itemIcons flex-column flex-md-row gap-3 d-flex align-items-center justify-content-between">
            <div class="incDecBtn d-flex gap-4 align-content-center justify-content-between mx-5">
                <i class="fa-solid fa-plus text-white rounded-pill bg-secondary p-1"></i>
                <span class="fw-bold itemquantity">${ele.quantity}</span>
                <i class="fa-solid fa-minus text-white rounded-pill bg-secondary p-1"></i>
            </div>
            <div class="ItemPrice mx-4">
                <span class="price">${ele.price} <span> EGP</span></span>
            </div>
            <div class="itemRemove">
                <span class="text-danger remove-product">Remove</span>
            </div>
        </div>
    </div> <hr>`
    })
    prodCont.innerHTML = elements;
    calcTotal();
    addEventsToBtn();

}
function addEventsToBtn(){
    const increasBtnd = document.querySelectorAll('.itemIcons .fa-plus')
    const dereasBtnd = document.querySelectorAll('.itemIcons .fa-minus');
    const removeBtn = document.querySelectorAll('.remove-product');
    const removeAllBtn = document.querySelector('.remove-all');

    increasBtnd.forEach(btn =>{
        btn.addEventListener("click", () =>{
            const parent = btn.closest(".cart-product");
            const id = parent.dataset.id;
            console.log(id);
            const prodObj = cart.find(ele => ele.id == id);
            console.log(prodObj);
            prodObj.quantity++;
            const itemquantity = parent.querySelector(".itemquantity");
            itemquantity.textContent = prodObj.quantity;
            localStorage.setItem('cart', JSON.stringify(cart))
            calcTotal();
        })
        
    })
    dereasBtnd.forEach(btn =>{
        btn.addEventListener("click", () =>{
            const parent = btn.closest(".cart-product");
            const id = parent.dataset.id;
            const prodObj = cart.find(ele => ele.id == id);
            if(prodObj.quantity == 1) return;
            prodObj.quantity--;
            const itemquantity = parent.querySelector(".itemquantity");
            itemquantity.textContent = prodObj.quantity;
            localStorage.setItem('cart', JSON.stringify(cart))
            calcTotal();
        })
        
    })
    removeBtn.forEach(btn =>{
        btn.addEventListener("click", () =>{
            console.log(btn);
            const par = btn.closest(".cart-product"); 
            const id = par.dataset.id;
            console.log(id);
            cart = cart.filter(ele => ele.id != id);
            console.log(cart);
            par.remove();
            localStorage.setItem('cart', JSON.stringify(cart));
            // calcTotal();
        })
    })
    removeAllBtn.addEventListener("click", () =>{
        cart = [];
        prodCont.innerHTML = `<h1 class="text-center fw-bolder">
        <div class="carts">
        <p class="pcart">Your cart is empty</p>
        <img src="assets/images/noCart.svg" alt="">
        <div class="col-12">
            <button type="submit" class="btn btn-warning m-5" onclick="location.href='master.html';">Continue
                Shopping</button>
        </div>
    </div>
        </h1>`
        localStorage.setItem('cart', JSON.stringify(cart));
            calcTotal();
    })

}
function calcTotal(){
    let total = cart.reduce((acc, ele) =>{
        const itemCost = ele.price * ele.quantity;
        console.log(itemCost);
        console.log(`price: ${ele.price}, Quantity: ${ele.quantity}, Item Cost: ${itemCost}`);
        let totalPrice = acc + ele.price;
        return totalPrice;
    } , 0);
    // console.log(total);
    priceTotal.textContent =  total + 'EGP' ;
}
