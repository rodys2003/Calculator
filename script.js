const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){ 
            display.innerText= "";
        }
        else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1);
        }
        else if(item.id == "equal"){
            if(display.innerText != ""){
                if(validDate(display.innerText)){
                    display.innerText = eval(display.innerText);
                }
                else{
                    display.innerText ="Null";
                    setTimeout(() => (display.innerText = ""),2000);
                }
            }
            else{
                display.innerText ="Null";
                setTimeout(() => (display.innerText = ""),2000);
            }
        }
        else{
            display.innerText += item.id;
        }
    };
});

function validDate (date){
    let pattern = /[\+\-\/\*]{2,}/;
    return !pattern.test(date);
}