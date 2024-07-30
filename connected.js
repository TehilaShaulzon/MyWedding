const wish = document.getElementById('wish');
const date = new Date();
const hour = date.getHours();

const inputname = document.getElementById('demo-name');
const inputpass = document.getElementById('demo-password');
const submit = document.getElementById('submit');
const newUser = document.getElementById('newUser');


const container = document.getElementById('wrapper');

if (hour > 19 && hour < 23 || hour < 6)
    wish.innerHTML = 'לילה טוב';
else if (hour >= 6 && hour <= 12)
    wish.innerHTML = 'בוקר טוב';
else if (hour <= 17)
    wish.innerHTML = 'צהרים טובים';
else if (hour <= 19)
    wish.innerHTML = 'ערב טוב';

inputname.onkeypress = (event) => {
    if (!((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z') || (event.key >= 'א' && event.key <= 'ת') || event.key === ' '))
        event.preventDefault();
}

const ThisUser = (name, password) => {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        users = [];
        localStorage.setItem('users', JSON.stringify(users));
        return null;
    }
    else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === name && users[i].password === password)
                return i;
        }
        return null;
    }
}


submit.onclick = (event) => {
    event.preventDefault();
    if (inputname.value === "" || inputpass.value === "") {
        alert('חובה למלא את כל השדות');

    }
    else {
        if (ThisUser(inputname.value, inputpass.value) === null) {//משתמש חדש

            newUser.innerHTML = ' : זוהה משתמש חדש , יש להשלים רישום';

            const br1 = document.createElement('br');
            const br2 = document.createElement('br');

            const divflex2 = document.createElement('div');

            const confirmPass = document.createElement('input');
            confirmPass.type = 'password';
            confirmPass.placeholder = 'אימות סיסמה';
            confirmPass.classList = "inputform"

            const email = document.createElement('input');
            email.type = 'email';
            email.placeholder = 'אימייל';
            email.classList = "inputform";

            divflex2.appendChild(email);
            divflex2.appendChild(confirmPass);
            divflex2.className = "flexform";

            const divflex3 = document.createElement('div');

            const weddingdate = document.createElement('input');
            weddingdate.type = 'date';
            weddingdate.classList = "inputform";
            const p = document.createElement('p');
            p.innerText = "תאריך החתונה";
            p.className = "buttonform";
            p.id = "labeldate";

            const tel = document.createElement('input');
            tel.type = 'tel';
            tel.placeholder = 'טלפון';
            tel.classList = "inputform";

            divflex3.style.position = "relative";
            divflex3.appendChild(tel);
            divflex3.appendChild(weddingdate);
            divflex3.appendChild(p);
            divflex3.className = "flexform";

            tel.onkeypress = (event) => {
                if (!(event.key >= 0 && event.key <= 9))
                    event.preventDefault();
            }


            container.append(br2, divflex2, br1, divflex3);

            weddingdate.onclick = () => {
                divflex3.removeChild(p);
            }

            submit.onclick = (event) => {
                event.preventDefault();

                if (inputname.value === '' || inputpass.value === '' || tel.value === '' || email.value === '' || weddingdate.value === '') {
                    alert('חובה למלא את כל השדות');
                    return
                }
                if (inputpass.value != confirmPass.value) {
                    alert('יש להכניס את הסיסמה שבחרתם לשני המקומות')
                    return;
                }

                if (tel.value.length > 10 || tel.value.length < 9) {
                    alert('יש להכניס מספר טלפון תקין בן 9 או 10 ספרות');
                    return;
                }
                const d = new Date(weddingdate.value);
                if (d.getTime() < date.getTime()) {
                    alert('הכנס תאריך תקין');
                    return;
                }

                let p = {
                    name: document.getElementById('demo-name').value,
                    password: document.getElementById('demo-password').value,
                    email: email.value,
                    datewedding: weddingdate.value,
                    phone: tel.value,

                }
                let users = JSON.parse(localStorage.getItem('users'));
                users.push(p);
                sessionStorage.setItem('user', (users.length - 1));
                localStorage.setItem('users', JSON.stringify(users));

                location.href = (sessionStorage.getItem('prevUrl'));
            }
        }

        else {
            sessionStorage.setItem('user', JSON.stringify(ThisUser(inputname.value, inputpass.value)));
            location.href = (sessionStorage.getItem('prevUrl'));
        }

    }

}
const returnc = document.getElementById('return');

returnc.onclick = function () {
    location.href = (sessionStorage.getItem('prevUrl'));
}

