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

var call = 0;
var sms = 0;
var warning = 0 ;
var critical = 0;

function settingValue(){

   call = Number( callCostSetting.value );
   sms = Number( smsCostSetting.value );
   warning = Number(warningLevelSetting.value);
   critical = Number(criticalLevelSetting.value);
  
   billTypeWithSettingsColor(total);
}

function billTypeWithSettings (){
  
   
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
  var billRadio = checkedRadioBtn.value;
  
  if (total < critical){

  
  if (billRadio === 'call'){
    callTotal += call;
  }
  
  else if (billRadio === 'sms'){
    smsTotal += sms;
  }

 
}
  
  
  callTotalSettings.innerHTML = callTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsTotal.toFixed(2);
  
  total = callTotal + smsTotal;
  if (callTotal + smsTotal < total){
      return -total 
      
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

updateSettings.addEventListener("click",settingValue)





