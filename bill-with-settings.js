const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const updateSettings = document.querySelector(".updateSettings");

var callTotal = 0;
var smsTotal = 0;
var total = 0;


function billTypeWithSettings (){
  
   
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
  var billRadio = checkedRadioBtn.value;
  
  if (checkedRadioBtn === 'call'){
    callTotal += call;
  }
  
  else if (checkedRadioBtn === 'sms'){
    smsTotal += sms;
  }
  
  
  callTotalSettings.innerHTML = callTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsTotal.toFixed(2);


  
  var call = Number( callCostSetting.value );
  var sms = Number( smsCostSetting.value );
  var warning = Number(warningLevelSetting.value);
  var critical = Number(criticalLevelSetting.value);
  
  var callCost = 0;
  var smsCost = 0;
  
  var checkedBtn = updateSettings.value; 
  

  if (checkedBtn === "call"){
    callCost = callTotal;
  }
  
  else if (checkedBtn === "sms"){
    smsCost = smsTotal;
  }
  
  
  callCostSetting.innerHTML = callCost.toFixed(2);
  smsCostSetting.innerHTML = smsCost.toFixed(2);
  
  var totalCost = callCost + smsCost;
  
  
  warningLevelSetting.innerHTML = totalCost.toFixed(2) ;
  criticalLevelSetting.innerHTML = totalCost.toFixed(2) ;
  
  //this part allows the incrementation of total while its < criticalValue
  while(total !=criticalLevelSetting.value ){  
    
  
    total = callTotal + smsTotal;
   
    }
    //this part allows for the reversal of total
    if(callTotal + smsTotal < total){
      total = callTotal + smsTotal; 
      
    }
    
    totalSettings.innerHTML = total.toFixed(2);
   
  billTypeWithSettingsColor(total);
};
function billTypeWithSettingsColor (totalCost){
  
  totalSettings.classList.remove('danger');
  totalSettings.classList.remove('warnings');
  //totalSettings.classList.remove('total');
  
  if (totalCost >= criticalLevelSetting.value){
    totalSettings.classList.add('danger');
  }
  
  else if (totalCost >= warningLevelSetting.value){
    totalSettings.classList.add('warning');
  }

  else if (total <= warningLevelSetting.value){
    totalSettings.classList.remove('warning');
  }
  
  /*else if (totalCost < warningLevelSetting.value){
     totalSettings.classList.add('total');
  }*/
};

 

radioBillAddBtn.addEventListener("click",billTypeWithSettings)

updateSettings.addEventListener("click",billTypeWithSettings)





