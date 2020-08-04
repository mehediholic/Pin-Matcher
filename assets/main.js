//All Numbers Button
function calculator(x){
    var pickInput = document.getElementById("showNumber");
    pickInput.value = pickInput.value + x;    
    }

//Hide Notification
function hideNotifySection (){
    document.getElementById("wrong-pin").style.display   = 'none';
    document.getElementById("pin-matched").style.display = 'none'; 
    }
    
//Backspace
    function back(){
    var expr = form.display.value;
    form.display.value = expr.substring( 0, expr.length-1);
    hideNotifySection ();
    }

//Clean
function cleanDisplay(){
    form.display.value = '';
    }

document.getElementById("clean-button").addEventListener("click", function(){
    cleanDisplay();
    hideNotifySection ();
    });

//Generate Random Numbers
    document.getElementById("generate-button").addEventListener("click", function(){
    var randomFourDigits = Math.floor(Math.random() * 9000 + 1000);
    var fourDigit = document.getElementById("randomFourDigits");
    fourDigit.value=randomFourDigits;
    cleanDisplay();
    hideNotifySection ();
    });

//Pin matched        
    document.getElementById("submit-button").addEventListener("click" , function(){
        let fourDigitsNum = document.getElementById("randomFourDigits");
        let showCalDisplay = document.getElementById("showNumber");

        if (fourDigitsNum.value == showCalDisplay.value){
            document.getElementById("pin-matched").style.display = 'block';
        } else{
        document.getElementById("wrong-pin").style.display = 'block';
        }
    });