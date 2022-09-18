const btnDecrementValue = document.getElementsByClassName("btn-decrement-quantity")
const btnIncrementValue = document.getElementsByClassName("btn-increment-quantity")
const oderQuantity = document.getElementById('oder-quantity')
const productCost = document.getElementById('product-cost')
const cost = parseInt(productCost.value);
const sale = 0;
const customerPayInput = document.getElementById('customer-pay');
const needToPay = document.getElementById('need-to-pay');
const tranferMoney = document.querySelector('.suggest-money');
const cashMoney = document.querySelector('.tranfer-money');
const moneyRadio1 = document.getElementById('cash');
const moneyRadio2 = document.getElementById('transfer');


btnIncrementValue[0].addEventListener('click', function (event) {
  var oldQuantity = parseInt(oderQuantity.value);
  var newQuantity = oldQuantity + 1;
  oderQuantity.value = newQuantity;
  var newCost = cost * newQuantity;
  productCost.value = newCost;
  document.getElementById('total-order').innerHTML = newQuantity;
  document.getElementById('total-money').innerHTML = newCost;
  document.getElementById('need-to-pay').innerHTML = newCost - sale;
});


btnDecrementValue[0].addEventListener('click', function (event) {
  var oldQuantity = parseInt(oderQuantity.value);
  if (oldQuantity == 0) {
    oderQuantity.value = 0;
    productCost.value = 0;
  } else {
    var newQuantity = oldQuantity - 1;
    oderQuantity.value = newQuantity;
    var newCost = cost * newQuantity;
    productCost.value = newCost;
    document.getElementById('total-order').innerHTML = newQuantity;
    document.getElementById('total-money').innerHTML = newCost;
    document.getElementById('need-to-pay').innerHTML = newCost - sale;
  }
});

customerPayInput.addEventListener('keyup', function (event) {
  var need = parseInt(needToPay.textContent);
  var pay = parseInt(customerPayInput.value);
  var excess = pay - need;
  document.getElementById('excess-money').innerHTML = excess;
});

document.querySelectorAll('.btn-suggest').forEach(item => {
  item.addEventListener('click', event => {
    customerPayInput.value = item.textContent;
    var need = parseInt(needToPay.textContent);
    var pay = parseInt(customerPayInput.value);
    var excess = pay - need;
    document.getElementById('excess-money').innerHTML = excess;
  })
})


function valueChange(event){
  if(moneyRadio1.checked){
    
    tranferMoney.style.display = "block";
    cashMoney.style.display = "none";

  }else{
    tranferMoney.style.display = "none";
    cashMoney.style.display = "block";
  }
}

moneyRadio1.addEventListener('change', valueChange);

moneyRadio2.addEventListener('change', valueChange);

