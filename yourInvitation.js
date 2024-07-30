
const prevUrl = "yourInvitation.html";
sessionStorage.setItem('prevUrl', prevUrl);


const image = new Image();


const downloadButton = document.getElementById('download-button');



downloadButton.addEventListener('click', () =>
 {
  const pageContent = document.documentElement;
  body.removeChild(downloadButton);
  const images = Array.from(pageContent.getElementsByTagName('img'));
  const imageLoadPromises = images.map(img => new Promise(resolve => {
    if (img.complete) {
      resolve();
    } else {
      img.onload = resolve;
    }
  }));
  



  Promise.all(imageLoadPromises).then(() => {
    html2canvas(pageContent).then(canvas => {
      const dataUrl = canvas.toDataURL(image.src);

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'page.png';
      link.click();
    });
  });
});




const data = JSON.parse(localStorage.getItem('data'));

//פונקציה לחישוב תאריך עברי תקין לחתונה!!!!!!
const hebrewdatewedding=function(date2)
{
const date1 = new Date(date2);

const options1 = { calendar: 'hebrew', year: 'numeric', month: 'long', day: 'numeric' };


const hebrewDate1 = date1.toLocaleDateString('he-IL', options1);
const hebrewDays=[0,'\'א','ב\'','ג\'','ד\'','ה\'','ו\'','ז\'','ח\'','ט\'','י\'','י\"א','י\"ב','י\"ג','י\"ד','ט\"ו','ט\"ז','י\"ז','י\"ח','י\"ט','כ\,','כ\"א','כ\"ב','כ\"ג','כ\"ד','כ\"ה','כ\"ו','כ\"ז','כ\"ח','כ\"ט','ל\''];
const hebrewYears=['תשפ\"ג',"תשפ\"ד","תשפ\"ד"];


console.log(hebrewDate1); 
const month = hebrewDate1.split(' ')[1];
const year = hebrewDate1.split(' ')[0];
const day = hebrewDate1.split(' ')[2];


console.log(month); 
console.log(year); 
console.log(day); 


const day1=parseInt(day);
const year1=parseInt(year);


console.log(day1,year1);
const updatedDate=hebrewDays[year1]+" "+month+" "+hebrewYears[day1-5783];
console.log(updatedDate);


return updatedDate;
}



console.log(data.type+"gfd");
const body=document.querySelector('body');
body.style.color=data.color;
body.style.backgroundColor=data.color;




const div=document.createElement('div');

div.id='divBoth';

body.appendChild(div);

const divfront=document.createElement('div');

divfront.style.backgroundImage=`url(${data.imgChoose})`;

divfront.id='divFront';

divfront.classList=('imgBackground');

div.appendChild(divfront);

const divBack=document.createElement('div');

divBack.style.backgroundImage=`url(${data.imgChoose})`;

divBack.id='divBack';

divBack.classList=('imgBackground');

div.appendChild(divBack);

const bsd = document.createElement('p');
bsd.id = "bsd";

bsd.innerText = "בסיעתא דשמיא";

divfront.appendChild(bsd);

const naale = document.createElement('p');

naale.id = "naale";

naale.innerText = "נעלה את ירושלים על ראש שמחתינו";

divfront.appendChild(naale);

const divtov = document.createElement('div');

divtov.id = "divtov";

divtov.classList="flex";

const psiman = document.createElement('p');

const pmazal = document.createElement('p');

psiman.id = "psiman";

pmazal.id = "pmazal";

psiman.innerText = "בסימן טוב";

pmazal.innerText = "ובמזל טוב";

divtov.append(psiman, pmazal);

divfront.append( divtov);

const pbeshevach = document.createElement('p');

pbeshevach.id = "pbeshevach";

pbeshevach.innerText = "בשבח ובהודאה לבורא עולם על כל הטוב אשר גמלנו \n הננו מתכבדים להזמינכם להשתתף \n בשמחת כלולות בנינו היקרים";

divfront.append( pbeshevach);

const divgroomandkala = document.createElement('div');

divgroomandkala.id = "divgroomandkala";

const pgroom = document.createElement('p');

pgroom.id = "pgroom";

pgroom.innerText = data.nameOfGroom;

console.log(pgroom.textContent);

const pny = document.createElement('p');

pny.id = "pny";

pny.innerText = "נ\"י";

const pgny = document.createElement('p');

pgny.id = "pgny";

pgny.innerText = pgroom.textContent + " " + pny.textContent;

const pabg = document.createElement('p');

pabg.id = "pabg";

pabg.innerText = "עב\"ג";

const pkala = document.createElement('p');

pkala.id = "pkala";

pkala.innerText = data.nameOfKala;

const ptchi = document.createElement('p');

ptchi.id = "ptchi";

ptchi.innerText ="תח\"י";

const pktchi = document.createElement('p');

pktchi.id = "pktchi";

pktchi.innerText = pkala.textContent + " " + ptchi.textContent;

divgroomandkala.classList="flex";

divgroomandkala.append(pgny, pabg, pktchi);

divfront.append( divgroomandkala);

console.log(data.dateOfTheWedding);

const weddDate = new Date(data.dateOfTheWedding);

const dateDay = weddDate.getDay();

const daysOfWeek = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

const dayName = document.createElement('p');

dayName.id = "dayName";

dayName.innerText = daysOfWeek[dateDay];

const pweddDateUpdated=document.createElement('p');

pweddDateUpdated.id="pweddDateUpdated";

pweddDateUpdated.innerText=hebrewdatewedding(weddDate);

const pweddingHall=document.createElement('p');

pweddingHall.id="pWeddingHall";

pweddingHall.innerText=data.yourHall;

const pweddHour=document.createElement('p');

pweddHour.id="pweddHour";

pweddHour.innerText=data.timeOfTheWedding;

const pweddingDetails=document.createElement('p');

pweddingDetails.id="pweddingDetails";

pweddingDetails.innerText="שתתקים בשעה טובה ומוצלחת \n ביום "+dayName.textContent+" "+pweddDateUpdated.textContent+" \nב\""+pweddingHall.textContent+"\" \n החופה בשעה "+pweddHour.textContent+" \n \n נשמח לראותכם משתתפים בשמחתינו \n";

divfront.append(pweddingDetails);

const divParents=document.createElement('div');

divParents.id="divParents";

const familyOfGroom=document.createElement('p');

familyOfGroom.id="familyOfGroom";

familyOfGroom.innerText=data.nameFamilyFatherOfGroom;

const familyOfKala=document.createElement('p');

familyOfKala.id="familyOfKala";

familyOfKala.innerText=data.nameFamilyFatherOfKala;

const pFatherOfGroom=document.createElement('p');

pFatherOfGroom.id="pFatherOfGroom";

pFatherOfGroom.innerText=data.nameFatherOfGroom+" "+familyOfGroom.textContent+" ורעיתו";

const pFatherOfKala=document.createElement('p');

pFatherOfKala.id="pFatherOfKala";

pFatherOfKala.innerText=data.nameFatherOfKala+" "+familyOfKala.textContent+" ורעיתו";

divParents.className="flex";

divParents.append(pFatherOfGroom,pFatherOfKala);

divfront.append(divParents);

const divGrands=document.createElement('div');

divGrands.id="divGrands";

const pgrandsOfGroom=document.createElement('p');

pgrandsOfGroom.id="pgrandsOfGroom";

pgrandsOfGroom.innerText=data.strOfGrandsOfGroom1;

const pgrandsOfKala=document.createElement('p');

pgrandsOfKala.id="pgrandsOfKala";

pgrandsOfKala.innerText=data.strOfGrandsOfKala1;

divGrands.classList="flex";

divGrands.append(pgrandsOfGroom,pgrandsOfKala);

divfront.append(divGrands);



if(data.type==='width')
{
  console.log(data.type);
  divfront.classList.add('width');
  divBack.classList.add('width');

}

else
{
  console.log(data.type);
  divBack.classList.add('height');
  divfront.classList.add('height');
}


const bDiv = document.createElement('div');
bDiv.style.width = '200px'; // Adjust the width and height to desired size
bDiv.style.height = '200px';
bDiv.style.borderRadius = '50%';
bDiv.style.border = '2px solid';
bDiv.style.display = 'flex';
bDiv.style.flexDirection = 'column';
bDiv.style.justifyContent = 'center';
bDiv.style.alignItems = 'center';



const gk = document.createElement('p');
gk.innerText = data.nameOfGroom + ' & ' + data.nameOfKala;
gk.style.margin = '0';
gk.style.fontSize = '24px'; 
gk.style.fontFamily = 'Guttman-Aram'; 




const bDate = document.createElement('p');
bDate.innerText = pweddDateUpdated.textContent;
bDate.style.margin = '0';



divBack.style.display = 'flex';
divBack.style.flexDirection = 'column';
divBack.style.justifyContent = 'center';
divBack.style.alignItems = 'center';
bDiv.append(gk, bDate);



const bmazalTov=document.createElement('p');
bmazalTov.innerText='מזל טוב';
bmazalTov.style.marginTop='100px';
bmazalTov.style.fontSize='35px';
divBack.append(bDiv,bmazalTov);




