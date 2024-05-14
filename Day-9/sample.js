function test(){
    const userName = document.getElementById("inp").value;
    document.getElementById("data").innerText=userName;

   }

function add(){
    const userName = document.getElementById("inp").value;
    document.getElementById("data").innerText=userName;
    }

function printName(){
    const userName = document.getElementById("inp").value;
    document.getElementById("data").innerText= userName;
}

function agesearch(){
    const ageValue = document.getElementById("ageId").value;
    const name = document.getElementById("nameId").value;
    if(ageValue <= 18){
        document.getElementById("msg").innerText = " Sorry " + name + " you are not allowed because your age is " + ageValue +" and it is below 19.";
    }else{
        document.getElementById("msg").innerText = "Welcome "+ name +"..........!!!! ";

    }
}






