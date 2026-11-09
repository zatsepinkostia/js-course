let sumOfPoints = 0;
const q1 = Number(prompt('Скільки буде 2+2?'));
if (q1 === 4) {
    sumOfPoints += 10;
}
const q2 = confirm('Сонце встає на сході?');
if (q2) {
    sumOfPoints += 10;
}
const userInq3 = prompt('Скільки буде 5/0 ?') || '';
const q3 = userInq3.trim().toLowerCase();
if (q3 === 'infinity') {
    sumOfPoints += 10;
}
const userInq4 = prompt('Якого кольору небо?') || '';
const q4 = userInq4.trim().toLowerCase();
if (q4 === 'блакитний') {
    sumOfPoints += 10;
}
const q5 = Number(prompt('Яка правильна відповідь на головне питання життя, всесвіту та таке інше?'));
if (q5 === 42) {
    sumOfPoints += 10;
}
alert(`Кількість набраних очок: ${sumOfPoints}`);
let sum = 0;
for (let i = 1; i <= 3; i++) {
    sum += i;
}
