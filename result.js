// x=0  Stone
// x=1  Paper
// x=2  Scissor

function rock(a){
    const yr = document.getElementById('img1').src;
    const yp = document.getElementById('img2').src;
    const ys = document.getElementById('img3').src;
    document.getElementById('container2').style.display  ="none";
    document.getElementById('container3').style.display  ="inline-block";
    const x = Math.floor((Math.random() * 1000) + 1)%3;
    if(x == 0){
        document.getElementById('c31').src ="./Draw.png"
        document.getElementById('c32').src = yr;
    }
    else if(x==1){
        document.getElementById('c31').src = "./Lose.jpg"
        document.getElementById('c32').src = yp;
    }
    else{
        document.getElementById('c31').src = "./Win.png";
        document.getElementById('c32').src = ys;
    }
}
function paper(a){
    const yr = document.getElementById('img1').src;
    const yp = document.getElementById('img2').src;
    const ys = document.getElementById('img3').src;
    document.getElementById('container2').style.display  ="none";
    document.getElementById('container3').style.display  ="inline-block";
    const x = Math.floor((Math.random() * 1000) + 1)%3;
    if(x == 1){
        document.getElementById('c31').src ="./Draw.png"
        document.getElementById('c32').src = yp;
    }
    else if(x==2){
        document.getElementById('c31').src = "./Lose.jpg"
        document.getElementById('c32').src = ys;
    }
    else{
        document.getElementById('c31').src = "./Win.png";
        document.getElementById('c32').src = yr;
    }
}

function scissor(a){
    const yr = document.getElementById('img1').src;
    const yp = document.getElementById('img2').src;
    const ys = document.getElementById('img3').src;
    document.getElementById('container2').style.display  ="none";
    document.getElementById('container3').style.display  ="inline-block";
    const x = Math.floor((Math.random() * 1000) + 1)%3;
    if(x == 2){
        document.getElementById('c31').src ="./Draw.png"
        document.getElementById('c32').src = ys;
    }
    else if(x==0){
        document.getElementById('c31').src = "./Lose.jpg"
        document.getElementById('c32').src = yr;
    }
    else{
        document.getElementById('c31').src = "./Win.png";
        document.getElementById('c32').src = yp;
    }
}