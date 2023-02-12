const myUtilities='variable Inside Utilities File';


const MainDeposit = document.getElementById("maindeposit");
const MainWithdraw = document.getElementById("mainwithdraw");
const MainBalance = document.getElementById("mainbalance");

const DepositInput = document.getElementById("depositinput");
const DepostButton = document.getElementById("btndeposit");
const WithdrawInput = document.getElementById("withdrawinput");
const WithdrawButton = document.getElementById("btnwithdraw");

function getInputValueByID(inputId){
    //console.log(inputId);
    const inputField=document.getElementById(inputId);
    const inputFieldString=inputField.value;
    const inputValue=parseFloat(inputFieldString);
    return inputValue;
}

function getElementValueByID(inputID){
    const Element=document.getElementById(inputID);
    const ElementString=Element.innerText;
    const ElementValue=parseFloat(ElementString);
    return ElementValue;
}

function setElementValueByID(inputID,Amount){
    const Element=document.getElementById(inputID);
    Element.innerText=Amount;
}