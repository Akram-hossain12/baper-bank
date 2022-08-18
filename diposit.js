document.getElementById('btn-Deposit').addEventListener('click',function(){
 
   let depositField = document.getElementById('Deposit-field');

   let depositValue =  depositField.value;

   let depositTotle = parseFloat(depositValue);
   depositField.value = '';

  
   let dipositAmountField = document.getElementById('amount');
   let dipositAmountShow = dipositAmountField.innerText;
   let amountTotle = parseFloat(dipositAmountShow);
   let totle = depositTotle + amountTotle ;

   dipositAmountField.innerText =  totle;

   const balanceSide = document.getElementById('balance-side');
   const balanceAmountString = balanceSide.innerText;
   const balanceAmount = parseFloat(balanceAmountString);
   balanceSide.innerText = totle + balanceAmount;
  
})

