console.log("All Function Types");

//Declaration Convert temp C to F
function cToF(c) {
     return (c * 9/5) + 32; 
}
console.log("Declaration:", cToF(25), "°F");

//Expression password is strong
const StrongPassword = function(pwd) { 
    return pwd.length >= 8 && /\d/.test(pwd); 
};
console.log("Expression:", StrongPassword("pass1234"));

// Arrow Get initials from a name
const getInitials = name => name.split(" ").map(n => n[0]).join("").toUpperCase();
console.log("Arrow:", getInitials("kandula Tarak"));

//Anonymous Debounce log for typing
setTimeout(function() {
    console.log("Anonymous: User stopped typing");
}, 1800);

// IIFE Create a private counter
const count = (function() {
    let n = 0;
    return () => ++n;
})();
console.log("IIFE counter:", count(), count());

//Callback Filter out expired snacks
const snacks = [
    {name: "chips", expired: false},
    {name: "yogurt", expired: true},
    {name: "nuts", expired: false}
];
const freshSnacks = snacks.filter(s =>!s.expired).map(s => s.name);
console.log("6. Callback:", freshSnacks);

// Method Game character attack
const warrior = {
    name: "Hulk",
    power: 30,
    attack(target) { 
        return `${this.name} hits ${target} for ${this.power} dmg`; 
    }
};
console.log("Method:", warrior.attack("IronMan"));

// Constructor Create a dice object
function Dice(sides) {
    this.sides = sides; 
}
Dice.prototype.roll = function() {
    return Math.ceil(Math.random() * this.sides);
};
const d6 = new Dice(6);
console.log("Constructor roll:", d6.roll());

// Async Fake API call for weather
async function getWeather(city) {
    const fakeData = await new Promise(r => setTimeout(() => r({temp: 30, city}), 600));
    console.log("Async:", `${fakeData.city}: ${fakeData.temp}°C`);
}
getWeather("Palakollu");

// Generator Infinite ID generator
function* idGen() {
    let id = 100; while(true) yield `USR-${id++}`;
}
const ids = idGen();
console.log("Generator:", ids.next().value, ids.next().value);

// Recursive Count vowels in a word
function countVowels(str) {
    if (str.length === 0) return 0;
    const isVowel = "aeiou".includes(str[0].toLowerCase())? 1 : 0;
    return isVowel + countVowels(str.slice(1));
}
console.log("Recursive:", countVowels("JavaScript"));

//Higher-Order Create a multiplier
function makeMultiplier(factor) {
    return num => num * factor; 
}
const triple = makeMultiplier(3);
console.log("Higher-Order:", triple(7));