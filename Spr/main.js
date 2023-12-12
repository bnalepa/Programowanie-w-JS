/**
 * Za pomoca fetch pobierz listę postów z api o adresie https://jsonplaceholder.typicode.com/posts
 * W każdym z postów znajduje się userId, które określa dane użytkownika pod adresem https://jsonplaceholder.typicode.com/users/userId
 * Napisz skrypt, który po pobraniu listy postów i użytkowników wygeneruje dokument html z tabelą o trzech kolumnach
 * nazwa użytkownka - name
 * tytuł posta - title
 * treść posta - body
 * Nazwa użytkownika musi być linkiem lub przyciskiem, który po kliknięciu otwiera nowy dokument z wszystkimi danymi użytkownika i linkiem powrotnym
 * do strony z postami.
 */

let url = window.location.href;
let splittedUrl = url.split("=");
if(splittedUrl.length == 1)
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(response => createTable(response))
} else 
{

    getUser(splittedUrl[1]).then(x=>{
        let table = document.getElementById("posts");
        table.innerHTML = `<tr><td></td><td><a href =${url.split("?")[0]}>Cofnij</a>`;
        for(item in x)
        {
            
            
            if(typeof(x[item]) == "object")
            {

                for(object in x[item])
                {
                    console.log(object)
                    let tr = document.createElement("tr");
                    let td = document.createElement("td");
                    td.innerHTML = object;
                    tr.appendChild(td);
        
                    td = document.createElement("td");
                    td.innerHTML = x[item][object];
                    tr.appendChild(td);
        
                    table.appendChild(tr);
                }
            } else {

                let tr = document.createElement("tr");
                let td = document.createElement("td");
                td.innerHTML = item;
                tr.appendChild(td);
    
                td = document.createElement("td");
                td.innerHTML = x[item];
                tr.appendChild(td);
    
                table.appendChild(tr);
            }
            
        }
         
    })
        
}




async function createTable(data)
{
    let table = document.getElementById("posts");
    table.innerHTML = "<tr><th>Nazwa użytkownika</th><th>Tytuł</th><th>Treść</th><tr>";
    for(let item of data)
    {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        await getUser(item["userId"]).then(x => {
            td.innerHTML = `<a href="index.html?userid=${item["userId"]}">${x.name}</a>`
            tr.appendChild(td)
        });

        td = document.createElement("td");
        td.innerText = item["title"]  
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = item["body"]  
        tr.appendChild(td);

        table.appendChild(tr);
    }
}

//;

async function getUser(userId)
{
    userName = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    return userName;
}