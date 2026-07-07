// with usestate hook
import { useState , useEffect} from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    useEffect(() => {console.log("Count changed to: ", count)}, [count]);
    useEffect(() => {document.title = count},[count])

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <h1>Count : {count}</h1>

            <button onClick={inc}>Increment</button>
            <br /><br />

            <button onClick={dec}>Decrement</button>
            <br /><br />

            <button onClick={reset}>Reset</button>
        </>
    );
}


// // with usestate hook
// import { useState } from "react";

// export default function Counter() {

//     const [count, setCount] = useState(0);

//     function inc() {
//         setCount(count + 1);
//     }

//     function dec() {
//         setCount(count - 1);
//     }

//     function reset() {
//         setCount(0);
//     }

//     return (
//         <>
//             <h1>Count : {count}</h1>

//             <button onClick={inc}>Increment</button>
//             <br /><br />

//             <button onClick={dec}>Decrement</button>
//             <br /><br />

//             <button onClick={reset}>Reset</button>
//         </>
//     );
// }

// without useState hook

// let count = 0;

// export default function Counter() {

//     function inc() {
//         count++;
//         document.getElementById("count").innerHTML = count;
//     }

//     function dec() {
//         count--;
//         document.getElementById("count").innerHTML = count;
//     }

//     function reset() {
//         count = 0;
//         document.getElementById("count").innerHTML = count;
//     }

//     return (
//         <div>
//             <h1>
//                 Count : <span id="count">0</span>
//             </h1>

//             <button onClick={inc}>Increment</button>
//             <br /><br />

//             <button onClick={dec}>Decrement</button>
//             <br /><br />

//             <button onClick={reset}>Reset</button>
//         </div>
//     );
// }