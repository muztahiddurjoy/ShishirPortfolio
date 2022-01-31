var name = document.getElementById('form1').value;
var mail = document.getElementById('typeEmail').value;
var mess = document.getElementById('textAreaExample').value;
var butt = document.getElementById('btnSend');
    butt.addEventListener('click',()=>{
        if(this.name.length>3&&mail.length>7&&mess.length>10){
            console.log("Worked");
        }
        else{
            console.log("Kaam kore nai");
        }
    });
