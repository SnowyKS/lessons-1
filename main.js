let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (пример: Простые, Сложные, Интерактивные)");
let screenPrice = +prompt("Сколько будет стоить данная работа?")
let adaptive = prompt("Нужен ли адаптив на сайте?")
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log("Полная стоимость:", fullPrice);

const rollback = 0.15; // откат посреднику
let servicePercentPrice = fullPrice - Math.round(fullPrice * (1 - rollback))
console.log(servicePercentPrice)

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
}