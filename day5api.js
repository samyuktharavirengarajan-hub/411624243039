// fetch("https://jsonplaceholder.typicode.com/posts")
// 
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'My Post',
//         body: 'Learning fetch',
//         userId: 1
//     })
// })
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'DELETE',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'My Post',
//         body: 'Learning fetch',
//         userId: 1
//     })
// })
// fetch('https://jsonplaceholder.typicode.com/posts/8',{
//     method: 'PUT',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Updated Title',
//         body: 'Learning update',
//         userId: 7
//     })
// })
fetch('https://jsonplaceholder.typicode.com/posts/2',{
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        body: 'Learning update',
        userId: 7
    })
})
.then(response => response.json())
.then(data => console.log(data))