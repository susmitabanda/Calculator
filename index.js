let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button'); 
Numbutton = document.querySelectorAll('.numbuttons');
let Screenvalue = '';
for(items of buttons){
    items.addEventListener('click',(e)=>{
        const target = event.target;
        buttonText = e.target.innerText;
        console.log("button -> ", buttonText);
        if(buttonText == 'X'){
            buttonText = "*";
            Screenvalue += buttonText;
            screen.value = Screenvalue;
        }
        else if(buttonText == 'C'){
            Screenvalue = "";
            screen.value = Screenvalue;
        }
        else if(buttonText == "="){
            screen.value = eval(Screenvalue);
        }
        else if(buttonText == '^'){
            buttonText = "^";
            Screenvalue *= buttonText;
            screen.value = Screenvalue;
        }
        else if(target.tagName == 'IMG'){
            backspace = screen.value;
            restNum = backspace.slice(0,-1);
            Screenvalue = restNum;
            screen.value =Screenvalue;
        }
        else{
            Screenvalue += buttonText;
            screen.value = Screenvalue;
        }
    })
    // Numbutton.forEach(button => {
    //     button.style.backgroundColor = 'orange';
    //     button.style.color = 'black';
    // });

}