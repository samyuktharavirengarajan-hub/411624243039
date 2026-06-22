function getUsers(){
    document.getElementById("msg").innerHTML = "Loading..."
    setTimeout(function(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let output = ""
            for(let i = 0; i < data.length; i++)
            {
                output += `     
                <div class = "user">
                <h3>Name: ${data[i].name}</h3>
                <p>Email: ${data[i].email}</p>
                <p>Phone: ${data[i].phone}</p>
                </div>  
                <hr>
                `
            }
            document.getElementById("result").innerHTML = output;
            document.getElementById("msg").innerHTML = "Loaded Successfully"
        })
    }, 2000)
}