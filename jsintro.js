console.log("hi")
const first = document.getElementById("p1")
first.innerHTML = "Sam"
function example()
{
    console.log("Hello")
}
const input = document.getElementById("input")
const output = document.getElementById("inputField")
input.addEventListener("input", () =>{
    output.textContent = input.value
})
const second = document.createElement("p")
second.textContent = "New Paragraph"
document.body.appendChild(second)
second.remove()
// syncronous
// console.log("A")
// console.log("b")
// console.log("c")

// asycn
console.log("A")
setTimeout(() =>{
    console.log("B")
},2000)
setTimeout(() =>{
    console.log("Hello")
},0)
console.log("C")

// promise 
// 1. pending neither success nor failure
// 2. success / fulfilled
// 3. failure

const promise = new Promise((resolve, reject) =>{
    const success = true;
    // 19-06-2026
    if(success)
    {
        resolve("Done")
    }
    else
    {
        reject("Fail")
    }
    //console.log("Done")
    // setTimeout(() =>{
    //     console.log("Done")
    // }, 3000)
    // setTimeout(() =>{
    //     console.log("Done")
    // }, 0)
    //sync
    // if(success){
    //     console.log("Done")
    // }
    // else{
    //     console.log("Fail")
    // }
})

promise.then(res =>{console.log(res)}).catch(err=>{console.log(err)})