let yourscore=0;
let computerscore=0;
function rock(){
    let r=0;
    let value=Math.floor(Math.random()*3);
    
    if(value==r){
        // alert("Tie");
        document.getElementById("result").innerHTML= "TIE";
        document.getElementById("write").innerHTML= "";
    }else if(value==1){
        // alert("Computer Won");
        document.getElementById("result").innerHTML= " Computer WON";
        document.getElementById("write").innerHTML= "[Paper Won Against Rock]";
        document.getElementById("computerscore").innerHTML= ++computerscore;
        document.getElementById("yourscore").innerHTML= yourscore;
    }else {
        // alert("You Won");
        document.getElementById("result").innerHTML= "YOU WON !!";
        document.getElementById("write").innerHTML= "[Rock Won Aginst Scissors]";
        document.getElementById("computerscore").innerHTML= computerscore;
        document.getElementById("yourscore").innerHTML= ++yourscore;
    }
}
function paper(){
    let p=1;
    let value=Math.floor(Math.random()*3);
    
    if(value==p){
        // alert("Tie");
        document.getElementById("result").innerHTML= "TIE";
        document.getElementById("write").innerHTML= "";
    }else if(value==2){
        // alert("Computer Won");
        document.getElementById("result").innerHTML= " Computer WON";
        document.getElementById("write").innerHTML= "[Scissors Won Against Paper]";
        document.getElementById("computerscore").innerHTML= ++computerscore;
        document.getElementById("yourscore").innerHTML= yourscore;
    }else {
        // alert("You Won");
        document.getElementById("result").innerHTML= "YOU WON !!";
        document.getElementById("write").innerHTML= "[Rock Won Aginst Scissors]";
        document.getElementById("computerscore").innerHTML= computerscore;
        document.getElementById("yourscore").innerHTML= ++yourscore;
    }
}
function scissor(){
    let s=2;
    let value=Math.floor(Math.random()*3);
    if(value==s){
        // alert("Tie");
        document.getElementById("write").innerHTML= "TIE";
        document.getElementById("write").innerHTML= "";
    }else if(value==0){
        // alert("Computer Won");
        document.getElementById("result").innerHTML= " Computer WON";
        document.getElementById("write").innerHTML= "[Rock Won Against Scissors]";
        document.getElementById("computerscore").innerHTML= ++computerscore;
        document.getElementById("yourscore").innerHTML= yourscore;
    }else {
        // alert("You Won");
        document.getElementById("result").innerHTML= "YOU WON !!";
        document.getElementById("write").innerHTML= "[Scissors Won Aginst Paper]";
        document.getElementById("computerscore").innerHTML= computerscore;
        document.getElementById("yourscore").innerHTML= ++yourscore;
    }
}