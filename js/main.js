//  javascript



function moveProgressBar(progressBar) {
  let currentValue = 0;
  const targetValue = progressBar.getAttribute('per');

  const animation = setInterval(function () {
    if (currentValue >= targetValue) {
      clearInterval(animation);
      currentValue = 0; 
    } else {
      currentValue++;
      progressBar.style.width = currentValue + '%';
    }
  }, 1);
}

const participationElements = document.querySelectorAll('.Participation');

participationElements.forEach(function (participationElement) {
  const targetPosition = participationElement.offsetTop;

  document.addEventListener('scroll', function () {
    const currentPosition = window.scrollY + window.innerHeight;
    if (currentPosition >= targetPosition) {
      moveProgressBar(participationElement.querySelector('.Parti-per'));
    }
  });
});

//cookie

let currentCookie=document.cookie;
let cookieCheck=currentCookie.indexOf('green');
console.log(cookieCheck)

if(cookieCheck>-1){
    document.querySelector('.notice').style.display="none";
}else{
    document.querySelector('.notice').style.display="block";
}


document.querySelector('.hide').addEventListener('click',()=>{
    let date=new Date();
    date.setDate(date.getDate() + 7);
    let setCookie = "CookieName=green;";
        setCookie += "expires="+ date.toUTCString();

    document.cookie=setCookie;
})

document.querySelector('.close').addEventListener('click',function(){
    console.log(this)
    this.parentElement.style.display="none";
})