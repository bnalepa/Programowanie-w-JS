const callback = () => console.log("Time out") ;
// "sugestia" czasu minimalnego
/* setTimeout(
    () => {
      callback();
      setTimeout(
      () => {
        console.log("Task 2");
      }, 
      2000
      )
    }
    ,
    2000
)
function long(){
    let n = 1000;
    while(n-->0){
        console.log("Wait");
    }
}

long(); 

let delay = function(d){
    new Promise((resolve) => {
    setTimeout(resolve, d);
});
}

async function TwoDealy(){
    console.log("Start delay");
    await delay(2000);
    console.log("After delay");
    await delay(2000);
    if(Math.random() < 0.5)
    throw "Error";
    return "End";
}

 TwoDealy().then(str => console.log(str))
.catch(error =>console.log(error)) 

//zwracaj napis "End of double" po wywołaniu dwa razy TwoDelay
async function DoubleTwoDelay(){
    await TwoDealy().catch(error =>console.log(error));
    await TwoDealy().catch(error =>console.log(error));
    return "End of double";
}

console.log(DoubleTwoDelay());
*/
async function fetchJson()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let body = await response.json();
    //console.log(body);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(response => createTable(response))
.catch(e => console.log("Error",e))
.finally(e => console.log("Koniec pracy"));


function createTable(response)
{
    const table = document.getElementById("users");
    table.innerHTML = "<tr><th> Name </th><th> Username </th><th> Email </th></tr>"
    for(let item of response)
    {
        const dataToPrint = [item.name, item.username, item.email];
        const tr = document.createElement("tr")
        for(let data of dataToPrint)
        {
            let td = document.createElement("td")
            td.innerText = data;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
}


/* function createTable(response)
{
    let output = "";
 
    for(let item of response)
    {
        output += "<tr><td>" + item.name + "<td>" + item.username + "</td><td>" + item.email + "</td></tr>"
    }
    document.getElementById("users").innerHTML = output;
}
 */

//fetchJson().then(r => console.log(r));
