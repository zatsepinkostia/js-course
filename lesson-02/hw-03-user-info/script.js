const userInName = prompt('What is your name?');
const finalName = userInName && userInName.trim() ? userInName.trim() : 'Incorrect name';
const userSurname = prompt('What is your surname?');
const finalSurname = userSurname && userSurname.trim() ? userSurname.trim() : 'Incorrect surname';
let userInputEmail =(prompt('Please enter your email') || '');
userInputEmail = userInputEmail.replaceAll(' ', '').toLowerCase();
let email = '';
if (userInputEmail.includes('@')) {
    if (userInputEmail.startsWith('@')) {
        email = `not valid email <b>${userInputEmail}</b> (symbol @ find in first place)`;
    } else if (userInputEmail.endsWith('@')) {
        email = `not valid email <b>${userInputEmail}</b> (symbol @ find in last place)`;
    } else {
        email = `<b>${userInputEmail}</b>`;
    }
} else {
    email = `not valid email <b>${userInputEmail}</b> (symbol @ not exist)`;
}   
let yearInput =(prompt('What year were you born?') || '');
yearInput = yearInput.replaceAll(' ', '');
const birthYear = Number(yearInput);
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
const listHTML = `
  <ul>
    <li>Full name: ${finalName} ${finalSurname}</li>
    <li>Email: ${email}</li>
    <li>Age: ${age}</li>
  </ul>
`;
document.body.innerHTML += listHTML;
