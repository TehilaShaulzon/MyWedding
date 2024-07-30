const dom = {
  numOfGrandsOfGroom: document.getElementById('numOfGrandsOfGroom'),
  numOfGrandsOfKala: document.getElementById('numOfGrandsOfKala'),
  submitForm: document.getElementById('submitForm'),
  numOfGrands: document.getElementById('numOfGrands'),
  numberOfGrandfas: document.getElementById('numberOfGrandfas'),
  scrollLeftButton: document.getElementById('scroll-left-button'),
  scrollRightButton: document.getElementById('scroll-right-button'),
  pictureRow: document.getElementById('picturesInWidth'),
  userNav: document.getElementById('usernav')
}



const picturesinwidth = document.getElementById('picturesInWidth');
const picturesinlength = document.getElementById('picturesInLength');
const buttons = document.getElementsByClassName('picturebutton');


let dataImg = null;

const printPictures = function (data) {
  for (let index = 0; index < data.length; index++) {
    let buttonp = document.createElement('button');
    buttonp.type = 'button';
    buttonp.className = "picturebutton";



    let img = document.createElement('img');
    img.src = data[index].img;
    img.id = data[index].id;
    buttonp.appendChild(img);
    if (data[index].type === "width") {
      picturesinwidth.appendChild(buttonp);
    }
    else {
      picturesinlength.appendChild(buttonp);
    }
  }
}


let prevButton = null;


function attachButtonClickEvent() {
  // let idImg=3;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (event) => {
      const button = event.target;
      if (prevButton) {
        prevButton.style.borderColor = '';
        prevButton.style.borderStyle = '';
      }


      imgChoose = button.src;
      idImg = button.id;
      console.log(idImg);


      button.style.borderColor = 'rgb(150, 126, 5)';
      button.style.borderStyle = 'solid';
      button.style.borderWidth = '7px';
      prevButton = button;
    };
  }
}



const loadPictures = () => {
  let p = $.ajax({
    method: 'GET',
    url: "./invitation.json",
    success: (data) => {
      dataImg = data;
      printPictures(data);
      attachButtonClickEvent();

    }
  });

}


loadPictures();


let arrGroomGrands = [];
let arrKalaGrands = [];


let invitations = JSON.parse(localStorage.getItem('invitations'));
// console.log(invitations);


const ThisUser = (name, password) => {


  //   console.log("ThisUser");
  if (invitations === null) {
    console.log(" מערך ריק");
    invitations = [];
    localStorage.setItem('invitations', JSON.stringify(invitations));

    return null;
  }

  else 
  {
    console.log(invitations.length);
    for (let i = 0; i < invitations.length; i++) {
      if (invitations[i]?.name === name && invitations[i]?.password === password) {
        console.log(i);
        return i;
      }
      console.log(invitations[i].name + " " + invitations[i].password);
      console.log(name + '   ' + password);
    }


    return null;
  }
}


const old = {


  nameOfGroom: document.getElementById('nameOfGroom'),
  nameOfKala: document.getElementById('nameOfKala'),
  nameFatherOfGroom: document.getElementById('nameFatherOfGroom'),
  nameFamilyFatherOfGroom: document.getElementById('nameFamilyFatherOfGroom'),
  nameFatherOfKala: document.getElementById('nameFatherOfKala'),
  nameFamilyFatherOfKala: document.getElementById('nameFamilyFatherOfKala'),
  dateOfTheWedding: document.getElementById('dateOfTheWedding'),
  timeOfTheWedding: document.getElementById('timeOfTheWedding'),
  yourHall: document.getElementById('yourHall'),

}



const usersI = JSON.parse(localStorage.getItem('users'));
const userI = JSON.parse(sessionStorage.getItem('user'));
let isTrue = false;
let indexInvitation = (ThisUser(usersI[userI]?.name, usersI[userI]?.password));
console.log(indexInvitation);


if (indexInvitation === null) {
  isTrue = false;
  console.log(isTrue);
}


else
 {
  console.log(isTrue);
  isTrue = true;
  old.dateOfTheWedding.value = invitations[indexInvitation].dateOfTheWedding;
  old.nameOfKala.value = invitations[indexInvitation].nameOfKala;
  console.log(old.nameOfKala.value + "  " + invitations[indexInvitation].nameOfKala);
  old.nameOfGroom.value = invitations[indexInvitation].nameOfGroom;
  old.nameFatherOfKala.value = invitations[indexInvitation].nameFatherOfKala;
  old.nameFatherOfGroom.value = invitations[indexInvitation].nameFatherOfGroom;
  old.nameFamilyFatherOfKala.value = invitations[indexInvitation].nameFamilyFatherOfKala;
  old.nameFamilyFatherOfGroom.value = invitations[indexInvitation].nameFamilyFatherOfGroom;
  old.timeOfTheWedding.value = invitations[indexInvitation].timeOfTheWedding;
  old.yourHall.value = invitations[indexInvitation].yourHall;



  for (let index = 0; index < invitations[indexInvitation].arrGroomGrands.length; index++) {

    const input = document.createElement('input');
    input.type = 'text';
    input.value = invitations[indexInvitation].arrGroomGrands[index];
    input.classList.add('inputDetails');
    arrGroomGrands.push(input);
    numOfGrandsGroom.appendChild(input);
    console.log(invitations[indexInvitation].arrGroomGrands);
  }




  for (let index = 0; index < invitations[indexInvitation].arrKalaGrands.length; index++) {

    const input = document.createElement('input');
    input.type = 'text';
    input.value = invitations[indexInvitation].arrKalaGrands[index];
    input.classList.add('inputDetails');
    arrKalaGrands.push(input);
    numOfGrandsKala.appendChild(input);
    console.log(invitations[indexInvitation].arrKalaGrands);
  }
  // const br3=document.createElement('br');
  // numOfGrandsKala.appendChild(br3);
  // const br4=document.createElement('br');
  // numOfGrandsKala.appendChild(br4);



}
// הוספת סבים וסבתות
const plusgrandgroom = document.getElementById('plusgrandgroom');
const plusgrandkala = document.getElementById('plusgrandkala');
plusgrandgroom.onclick = () => {
  printGrandsGroom();
}



plusgrandkala.onclick = () => {
  printGrandsKala();
}



const printGrandsGroom = () => {


  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'הכנס שם מצד החתן';
  input.classList = "inputDetails gold";
  arrGroomGrands.push(input);
  numOfGrandsGroom.appendChild(input);


  let br = document.createElement('br');


}



const printGrandsKala = () => {


  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'הכנס שם מצד הכלה';
  input.classList = "inputDetails gold";
  arrKalaGrands.push(input);
  numOfGrandsKala.appendChild(input);

}




// הסרת סבים וסבתות
const minusgrandkala = document.getElementById('minusgrandkala');
const minusgrandgroom = document.getElementById('minusgrandgroom');




minusgrandgroom.onclick = () => {

  console.log(arrGroomGrands);
  const lastInput = numOfGrandsGroom.lastElementChild; // Get the last input element



  if (arrGroomGrands.length > 0) {

    // Check if a last input element exists
    lastInput.remove(); // Remove the last input
    arrGroomGrands.pop();
  }
}



minusgrandkala.onclick = () => {

  console.log(arrKalaGrands);
  const lastInput = numOfGrandsKala.lastElementChild; // Get the last input element
  console.log(numOfGrandsKala);

  if (arrKalaGrands.length > 0) {

    // Check if a last input element exists
    lastInput.remove(); // Remove the last input
    arrKalaGrands.pop();
    console.log(numOfGrandsKala);
  }
}



dom.scrollLeftButton.addEventListener('click', scrollLeft);
dom.scrollRightButton.addEventListener('click', scrollRight);



// Scroll left
function scrollLeft() {
  dom.pictureRow.scrollBy({ left: -244, behavior: 'smooth' });
}

// Scroll right
function scrollRight() {
  dom.pictureRow.scrollBy({ left: 244, behavior: 'smooth' });
}
const prevUrl = "invitation.html";
sessionStorage.setItem('prevUrl', prevUrl);


// let imgChoose='./pictures/רקעים מעודכן/1.jpg';
let idImg = 3;



dom.submitForm.onclick = function (event) {

  event.preventDefault();
  if (dom.userNav.textContent === "user") {
    const confirmatiom = confirm("עדיין לא התחברת");
    if (confirmatiom) {
      window.location.href = "./connected.html";
    }

  }
  else {
    const radioButtons = document.querySelectorAll('input[name="radioGroup"]');
    let color = 'kmkmlk';
    console.log(color);
    radioButtons.forEach(function (radio) {

      console.log(color + "  " + radio.value);
      // radio.addEventListener('change', function() {
      //   console.log(color);
      console.log(radio.checked);
      if (radio.checked) {
        const option = radio.value;
        console.log(radio.value + this.checked);
        if (option === 'option1') {
          color = 'black';
        } else if (option === 'option2') {
          color = 'beige';
          console.log("kjhgfds");
        } else if (option === 'option3') {
          color = 'rgb(150, 126, 5)';
        }
      }


      console.log(color);

      // });
    });
    let type = null;

    for (let index = 0; index < dataImg.length; index++) {
      const element = dataImg[index];

      //   console.log(idImg+"dfg "+element.id);

      if (idImg === element.id) {
        console.log(idImg === element.id + " " + idImg + " " + element.id);
        type = element.type;
        break;
      }
    }

    const user = sessionStorage.getItem('user');
    let strOfGrandsOfGroom = "";
    let strOfGrandsOfKala = "";
    for (let index = 0; index < arrGroomGrands.length; index++) {
      strOfGrandsOfGroom += "הרב " + arrGroomGrands[index].value + " ורעיתו \n";

    }
    for (let index = 0; index < arrKalaGrands.length; index++) {
      strOfGrandsOfKala += "הרב " + arrKalaGrands[index].value + " ורעיתו \n";

    }



    let data = {
      name: user.name,
      password: user.password,
      nameOfGroom: document.getElementById('nameOfGroom').value,
      nameOfKala: document.getElementById('nameOfKala').value,
      nameFatherOfGroom: document.getElementById('nameFatherOfGroom').value,
      nameFamilyFatherOfGroom: document.getElementById('nameFamilyFatherOfGroom').value,
      nameFatherOfKala: document.getElementById('nameFatherOfKala').value,
      nameFamilyFatherOfKala: document.getElementById('nameFamilyFatherOfKala').value,
      dateOfTheWedding: document.getElementById('dateOfTheWedding').value,
      timeOfTheWedding: document.getElementById('timeOfTheWedding').value,
      yourHall: document.getElementById('yourHall').value,
      strOfGrandsOfGroom1: strOfGrandsOfGroom,
      strOfGrandsOfKala1: strOfGrandsOfKala,
      imgChoose,
      type,
      color
    }



    json = JSON.stringify(data);
    localStorage.setItem('data', json);
    // console.log(arrKalaGrands);



    for (let index = 0; index < arrKalaGrands.length; index++) {
      const element = arrKalaGrands[index];
      arrKalaGrands[index] = element.value;

    }


    for (let index = 0; index < arrGroomGrands.length; index++) {
      const element = arrGroomGrands[index];
      arrGroomGrands[index] = element.value;

    }



    console.log("vbnm,k" + document.getElementById('nameFamilyFatherOfKala').value);



    data = {

      name: usersI[userI].name,
      password: usersI[userI].password,
      imgChoose,
      type,
      nameOfGroom: document.getElementById('nameOfGroom').value,
      nameOfKala: document.getElementById('nameOfKala').value,
      nameFatherOfGroom: document.getElementById('nameFatherOfGroom').value,
      nameFamilyFatherOfGroom: document.getElementById('nameFamilyFatherOfGroom').value,
      nameFatherOfKala: document.getElementById('nameFatherOfKala').value,
      nameFamilyFatherOfKala: document.getElementById('nameFamilyFatherOfKala').value,
      arrGroomGrands: arrGroomGrands,
      arrKalaGrands: arrKalaGrands,
      dateOfTheWedding: document.getElementById('dateOfTheWedding').value,
      timeOfTheWedding: document.getElementById('timeOfTheWedding').value,
      yourHall: document.getElementById('yourHall').value,
      color
    }




    console.log(data.arrGroomGrands);
    if (isTrue) 
    {
      console.log(isTrue);
      invitations[indexInvitation] = data;
    }


    else
     {
      console.log(isTrue);
      invitations.push(data);
      localStorage.setItem('invitations', JSON.stringify(invitations));
    }

    

    // json = JSON.stringify(data);
    // localStorage.setItem('data', json);
    window.location.href = './yourinvitation.html';
  }
}













