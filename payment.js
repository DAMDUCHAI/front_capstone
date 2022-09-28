const btnDecrementValue = document.querySelectorAll(".btn-decrement-quantity")
const btnIncrementValue = document.querySelectorAll(".btn-increment-quantity")
const oderQuantity = document.getElementsByClassName('oder-quantity')
const productCost = document.getElementsByClassName('product-cost')
const sumCost = document.getElementsByClassName('sum-cost')
const customerPayInput = document.getElementById('customer-pay');
const needToPay = document.getElementById('need-to-pay');
const tranferMoney = document.querySelector('.suggest-money');
const cashMoney = document.querySelector('.tranfer-money');
const moneyRadio1 = document.getElementById('cash');
const moneyRadio2 = document.getElementById('transfer');
const btnSuggests = document.querySelectorAll('.btn-suggest');
const btnRemove = document.querySelectorAll('.remove-product')
const sale = 0;


//increase quantity
for (var i = 0; i < btnIncrementValue.length; i++) {
  btnIncrementValue[i].addEventListener('click', function (event) {
    var btnItem = event.target;
    var productQuantity = btnItem.parentElement.parentElement;
    var product = productQuantity.parentElement;
    var oldQuantity = parseInt(productQuantity.querySelector('.oder-quantity').value);
    var cost = parseInt(product.querySelector('.product-cost').value);
    var newQuantity = oldQuantity + 1;
    productQuantity.querySelector('.oder-quantity').value = newQuantity;
    var sumCost = cost * newQuantity;
    product.querySelector('.sum-cost').innerText = sumCost;
    totalPayment();
  });
}

//decrease quantity
for (var i = 0; i < btnDecrementValue.length; i++) {
  btnDecrementValue[i].addEventListener('click', function (event) {
    var btnItem = event.target;
    var productQuantity = btnItem.parentElement.parentElement;
    var product = productQuantity.parentElement;
    var oldQuantity = parseInt(productQuantity.querySelector('.oder-quantity').value);
    var cost = parseInt(product.querySelector('.product-cost').value);
    if (oldQuantity == 1) {
      productQuantity.querySelector('.oder-quantity').value = oldQuantity;
      product.querySelector('.sum-cost').innerText = cost;
    }
    else {
      var newQuantity = oldQuantity - 1;
      productQuantity.querySelector('.oder-quantity').value = newQuantity;
      var sụmCost = cost * newQuantity;
      product.querySelector('.sum-cost').innerText = sụmCost;
    }
    totalPayment();
  });
}

//input product quantity
Array.from(oderQuantity).forEach((element, index) => {
  element.addEventListener('keyup', (event) => {
    var btnItem = event.target;
    var productQuantity = btnItem.parentElement;
    var product = productQuantity.parentElement;
    var quantity = parseInt(productQuantity.querySelector('.oder-quantity').value);
    if (Number.isNaN(quantity)) {
      product.querySelector('.sum-cost').innerText = 0;
    }
    else {
      var sumCost = product.querySelector('.product-cost').value * quantity;
      product.querySelector('.sum-cost').innerText = sumCost;
    }
    totalPayment();
  });
})

//input excess money
customerPayInput.addEventListener('keyup', function (event) {
  var need = parseInt(needToPay.textContent);
  var pay = parseInt(customerPayInput.value);
  var excess = pay - need;
  document.getElementById('excess-money').innerHTML = excess;
});

//suggest money to pay
document.querySelectorAll('.btn-suggest').forEach(item => {
  item.addEventListener('click', event => {
    customerPayInput.value = item.textContent;
    var need = parseInt(needToPay.textContent);
    var pay = parseInt(customerPayInput.value);
    var excess = pay - need;
    document.getElementById('excess-money').innerHTML = excess;
  })
})

//change payment type
function valueChange(event) {
  if (moneyRadio1.checked) {
    tranferMoney.style.display = "block";
    cashMoney.style.display = "none";
  } else {
    tranferMoney.style.display = "none";
    cashMoney.style.display = "block";
  }
}
moneyRadio1.addEventListener('change', valueChange);
moneyRadio2.addEventListener('change', valueChange);

function suggestMoney(money) {
  btnSuggests.forEach(function (btn, index) {
    btn.innerHTML = money * (index + 1);
  })
}


function totalPayment() {
  //tổng số hàng
  var totalQuantity = 0;
  for (var i = 0; i < oderQuantity.length; i++) {
    var quantity = parseInt(oderQuantity[i].value);
    console.log(quantity);
    if (!Number.isNaN(quantity)) {
      console.log(quantity);
      totalQuantity += quantity;
    } 
  };
  document.getElementById('total-order').innerHTML = totalQuantity;
  //tổng tiền hàng
  var totalMoney = 0;
  for (var i = 0; i < sumCost.length; i++) {
    totalMoney += parseInt(sumCost[i].textContent);
  }
  document.getElementById('total-money').innerHTML = totalMoney;
  //khách phải trả
  document.getElementById('need-to-pay').innerHTML = totalMoney - sale;
  suggestMoney(totalMoney);
}

//remove product
for (var i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener('click', function (event) {
    var btnItem = event.target;
    var product = btnItem.parentElement.parentElement;
    product.remove();
    totalPayment();
  });
}