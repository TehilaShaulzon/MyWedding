const audio=document.createElement('audio');
audio.id="music";
audio.src="./אבי אילסון - זמן חופה 00_00_43-.mp3";
audio.loop=true;
audio.autoplay=true;
document.body.appendChild(audio);

window.addEventListener("load", () => {
    const music = document.getElementById("music");
  
    if (sessionStorage.getItem("audioPosition")) {
      music.currentTime = parseFloat(sessionStorage.getItem("audioPosition"));
    }
    
    music.addEventListener("timeupdate", () => {
      sessionStorage.setItem("audioPosition", music.currentTime);
    });
    
    music.play();
  
  });

let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hou = document.getElementById('hou');
let da = document.getElementById('da');


const users = JSON.parse(localStorage.getItem('users'));
const user = JSON.parse(sessionStorage.getItem('user'));

if (user != null) {

    let usernav = document.getElementById('usernav');
    usernav.textContent = users[user]?.name;
}

if(users[user]?.name==='adm'&&users[user].password==='123')
{
    console.log(users[user].name+" "+users[user].password);
   const navPage=document.getElementById('navpages') ;
   const li=document.createElement('li');
   li.id='admUsers';
   const a=document.createElement('a');
   a.href='./admUser.html';
   a.classList=("gold link text_size_s");
   a.innerHTML='הצגת משתמשים';
   li.appendChild(a);
   navPage.appendChild(li);
}

var display = document.getElementById("timer");

const startDate = new Date();
const d = users[user]?.datewedding;
const endDate = new Date(d);


// const d=  user!=null?users[user]?.datewedding:null;

var timeDifference = endDate.getTime() - startDate.getTime(); // מחשב את ההפרש בין התאריכים במילישניות
var seconds = Math.floor(timeDifference / 1000); // מחשב את ההפרש בשניות

var days = Math.floor(seconds / (24 * 60 * 60)); // מחשב את מספר הימים בהפרש
seconds -= days * 24 * 60 * 60;

var hours = Math.floor(seconds / (60 * 60)); // מחשב את מספר השעות בהפרש
seconds -= hours * 60 * 60;

var minutes = Math.floor(seconds / 60); // מחשב את מספר הדקות בהפרש
seconds -= minutes * 60;

startTimer(days, hours, minutes, seconds, display);



function startTimer(days, hours, minutes, second, display) {
    var totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + (second);
    var timer = totalSeconds, remainingDays, remainingHours, remainingMinutes, seconds;
    setInterval(function () {
        remainingDays = Math.floor(timer / (24 * 60 * 60));
        remainingHours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        remainingMinutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = timer % 60;

        remainingDays = remainingDays < 10 ? "0" + remainingDays : remainingDays;
        remainingHours = remainingHours < 10 ? "0" + remainingHours : remainingHours;
        remainingMinutes = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (sec != null)
            sec.innerHTML = seconds;
        else
            sec = "";

        if (min != null)
            min.innerHTML = remainingMinutes;
        else
            min = "";


        if (hou != null)
            hou.innerHTML = remainingHours;
        else
            hou = "";


        if (da != null)
            da.innerHTML = remainingDays;
        else
            da = "";

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


emailButton.addEventListener('click', function () {
    const recipient = 'c0556728176@gmail.com,t8472959@gmail.com'; 
    const subject = 'Hello';
    const body = 'This is the message body.'; 
  
    const mailtoURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

   
    window.open(mailtoURL, '_blank');
   
});
emailButton.addEventListener('mouseover',function(){
    emailButton.style.cursor="pointer";
})
const usernametop=document.getElementById('usernametop');
usernametop.addEventListener('click',function(){
   location.href="./connected.html";

})
usernametop.addEventListener('mouseover', function() {
    usernametop.style.cursor="pointer";
})
const logoImg=document.getElementById('logoImg');
logoImg.addEventListener('click',function(){
    location.href="./home.html";
})
logoImg.addEventListener('mouseover',function(){
    logoImg.style.cursor="pointer";
})
const linkPhotographers=document.getElementById('photographersLink');
linkPhotographers.onclick=function(){
    const url="https://tekno-art.com/";
    window.open(url,'_blank');
  }
  linkPhotographers.addEventListener('mouseover', function() {              
    linkPhotographers.style.cursor="pointer";
  });



