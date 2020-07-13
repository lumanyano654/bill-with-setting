function billWithSettings() {
   
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var totalCallCost = 0;
    var totalSmsCost = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }


    function getCallCost(){
        
        return theCallCost
    }   


function setSmsCost(smsCost) {
    theSmsCost = smsCost;
    }


function getSmsCost(){
    
    return theSmsCost
    }


function setWarningLevel (warningLevel) {
    theWarningLevel = warningLevel;
    }   

function getWarningLevel (warningLevel) {
    return theWarningLevel;


}

function setCriticalLevel (criticalLevel) {
    theCriticalLevel = criticalLevel;
}

function getCriticalLevel (criticalLevel) {
    return theCriticalLevel;


}

function makeCall() {
    if (!hasReachedCriticalLevel()){
    totalCallCost += theCallCost;
    }

}

function getTotalCost() {
    return totalCallCost + totalSmsCost;
}

function getTotalCallCost() {
    return totalCallCost;
}
function getTotalSmsCost() {
    return totalSmsCost;
}

function sendSms() {
  if(!hasReachedCriticalLevel()){
    return totalSmsCost += theSmsCost;
    }
}

function hasReachedCriticalLevel(){
    return getTotalCost() >= getCriticalLevel();  
}


function totalClassName() { 
    if (hasReachedCriticalLevel()){
        return "critical";
    } 
  
    if (getTotalCost() >= getWarningLevel()){


        return "warning";
    } 
}






    return {
        
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        
    }  
    


};