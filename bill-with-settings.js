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

var settingsInstance = billWithSettings()

function settingValue(){

   settingsInstance.setCallCost(Number(callCostSetting.value));
   settingsInstance.setSmsCost(Number( smsCostSetting.value ));
  settingsInstance.setWarningLevel(Number(warningLevelSetting.value));
   settingsInstance.setCriticalLevel(Number(criticalLevelSetting.value));
  
   billTypeWithSettingsColor();
}

function billTypeWithSettings (){
  
   
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
  var billRadio = checkedRadioBtn.value;
  
 if (billRadio === 'call'){
   settingsInstance.makeCall()
 
   }
  
  else if (billRadio === 'sms'){
    settingsInstance.sendSms()
  }
  
  callTotalSettings.innerHTML = settingsInstance.getTotalCallCost().toFixed(2);
  smsTotalSettings.innerHTML = settingsInstance.getTotalSmsCost().toFixed(2);
  totalSettings.innerHTML = settingsInstance.getTotalCost().toFixed(2)
   
  billTypeWithSettingsColor();
};

function billTypeWithSettingsColor (){
  
  totalSettings.classList.remove('critical');
  totalSettings.classList.remove('warning');
  totalSettings.classList.add(settingsInstance.totalClassName());

};

 
  radioBillAddBtn.addEventListener("click",billTypeWithSettings)
   updateSettings.addEventListener("click",settingValue)






