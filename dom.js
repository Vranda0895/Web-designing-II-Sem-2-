function result(){
    
    let inputData=document.getElementById("inputText").value;
    document.getElementById("text").textContent=inputData;

    if(inputData>=18){
        alert("Valid ");
    }
    else{
        alert("not valid");
    }
    //change heading color on click
    
    let changeColor=document.getElementById('text');
    changeColor.style.color="red";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="blue";
}

let para=document.getElementById("paratext");
function changetextColor(){
    para.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
para.addEventListener('mouseover',changetextColor);
