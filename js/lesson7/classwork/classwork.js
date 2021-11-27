// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, publishYear, maxSpeed, engineCapacity){
//     this.model = model;
//     this.producer = producer;
//     this.publishYear = publishYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function() {
//         console.log(`model - ${this.model}`)
//         console.log(`producer - ${this.producer}`)
//         console.log(`year - ${this.publishYear}`)
//         console.log(`maxSpeed - ${this.maxSpeed}`)
//         console.log(`engineCapacity - ${this.engineCapacity}`)
//         if (this.driver !== undefined)
//             console.log(`driver - ${this.driver}`)
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function(newValue){
//         this.publishYear = newValue;
//     }
//     this.addDriver = function(driver){
//         this.driver = driver;
//     }
// }
// let car = new Car('x6', 'bmw', 2021, '200 км', 2.4)

// (Те саме, тільки через клас)
// class Car{
//     constructor(model, producer, publishYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.publishYear = publishYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info() {
//         console.log(`model - ${this.model}`)
//         console.log(`producer - ${this.producer}`)
//         console.log(`year - ${this.publishYear}`)
//         console.log(`maxSpeed - ${this.maxSpeed}`)
//         console.log(`engineCapacity - ${this.engineCapacity}`)
//         if (this.driver !== undefined)
//             console.log(`driver - ${this.driver}`)
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue){
//         this.publishYear = newValue;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
// let car = new Car('x6', 'bmw', 2021, '200 км', 2.4)

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function Cinderella(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// const girlsArray = [
//     new Cinderella('Anna', 19, 38),
//     new Cinderella('Yulya', 21, 39),
//     new Cinderella('Chris', 17, 35),
//     new Cinderella('Lilya', 18, 37.5),
//     new Cinderella('Solya', 19, 37),
//     new Cinderella('Sonya', 19, 38.5),
//     new Cinderella('Renata', 25, 40),
//     new Cinderella('Vanda', 20, 35.5),
//     new Cinderella('Melissa', 18, 36.5),
//     new Cinderella('Elsa', 19, 36)
// ]
// const prince = {
//     name: 'Richard',
//     age: 23,
//     shoe: 37
// }
// for (let i = 0; i < girlsArray.length; i++) {
//     if (prince.shoe === girlsArray[i].footSize)
//         console.log(girlsArray[i].name + " має бути з принцом!")
// }
//console.log(girlsArray.find(item => item.footSize === prince.shoe))