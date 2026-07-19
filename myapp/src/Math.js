export function Add(){
    const a = 10
    const b = 20
    return(
        <h1>{a+b}</h1>
    )
}
export function Subtract(){
    const a = 20;
    const b = 10;
    return(
       <h1>{a - b}</h1>
    )
}

export function Multiply(){
    const a = 20;
    const b = 10;
    return(
       <h1>{a * b}</h1>
    )
}

export function Divide(){
    const a = 20;
    const b = 10;
    return(
       <h1>{a / b}</h1>
    )
}

export function NotFound(){
    return(
        <h1>{"Incorrect Route"}</h1>
    )
}