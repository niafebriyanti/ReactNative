console.log("TUGAS 5 - ES6\n");

console.log("~~~ NOMOR 1 - Arrow function ~~~\n");

const golden = () => {
    console.log('This is golden!!')
}
golden()

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 2 - Object literal ~~~\n");

const newFunction = function literal(firstName, lastName){
    return {
        firstName,
        lastName,
        fullName(){
            console.log(firstName + " " + lastName)
            return
        }
    }
}
newFunction("William", "Imoh").fullName()

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 3 - Destructuring ~~~\n");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject;

console.log(firstName, lastName, destination, occupation);

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 4 - Array spreading ~~~\n");

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

console.log(combined);

console.log("\n---------------------------------------------------\n");

console.log("~~~ NOMOR 5 - Template literals ~~~\n");

const planet = "earth"
const view = "glass"
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

console.log(before) 

console.log("\n---------------------------------------------------\n");