function random(a){
    const x = Math.floor((Math.random() * 100) + 1);
    console.log(x%3);
    document.getElementById('f1').innerText =x;
}

function Start(a)
{
    document.getElementById('container1').style.display = "none";
    document.getElementById('container2').style.display = "inline-block"
    document.getElementById('container3').style.display = "none";
}

// Blink finger
const x = setInterval(myfn1,1000);
const y = setInterval(myfn2, 2000);
const z = setInterval(myfn3, 3000);
function myfn1(){
    clearTimeout(x);
    setInterval(myfn4, 3000);
}
function myfn2(){
    clearTimeout(y);
    setInterval(myfn5, 3000);
}
function myfn3(){
    clearTimeout(z);
    setInterval(myfn6, 3000);
}

function myfn4(){
    document.getElementById('fin1').style.visibility = " visible";
    document.getElementById('fin2').style.visibility = " hidden";
    document.getElementById('fin3').style.visibility = " hidden";
}
function myfn5(){
    document.getElementById('fin2').style.visibility = " visible";
    document.getElementById('fin1').style.visibility = " hidden";
    document.getElementById('fin3').style.visibility = " hidden";
}
function myfn6(){
    document.getElementById('fin3').style.visibility = " visible";
    document.getElementById('fin1').style.visibility = " hidden";
    document.getElementById('fin2').style.visibility = " hidden";
}