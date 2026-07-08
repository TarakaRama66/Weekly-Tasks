var arr = ["Tarak"]
console.log(arr)

function hai(){
    arr.push("Tilak")
}
hai()
console.log(arr)

arr.unshift("Kandula")
console.log(arr)

arr.splice(2,0,"Ram")
console.log(arr)

arr.push("Gupta")
console.log(arr)

var a=["kandula","Tarak","Ram","Tilak","Gupta"]
console.log("Gupta")

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.splice(1,1)
console.log(arr)

let frontend = ["HTML", "CSS"]
let Backend = ["Node"]
let FullStack = frontend.concat(Backend)
console.log(FullStack)


let names = ["Tarak", "Gupta"]
names.splice(0)
console.log(names);