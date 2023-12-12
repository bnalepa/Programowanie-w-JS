class TodoService {

    constructor(url, alertPlaceholder) {
      this.url = url;
      this.alertPlaceholder = alertPlaceholder;
    }
  
    async getAllTodos() {
      return this.#fetchFromPath('todos');
    }
  
    async getTodoById(id) {
      return this.#fetchFromPath(`todos/${id}`);
    }
  
    async getAllUsers() {
      return this.#fetchFromPath('users');
    }
  
    async getUserById(id) {
      return this.#fetchFromPath(`users/${id}`);
    }
  
    async #fetchFromPath(path) {
      //
      const body = await fetch(`${this.url}/${path}`);
      return await body.json();
      //
    }
  }
  
  class TodosModel {
    #parent;
    #data;
    #renderFunction;
    constructor(parent, data, renderFunction) {
      this.#parent = parent;
      this.#data = data;
      this.#renderFunction = renderFunction;
    }
  
    get parent(){
      return this.#parent;
    }
  
    get data() {
      return this.#data;
    }
  
     deleteTask(id) {
      console.log("delete  "+ id)
    }
  
    addTask(task) {
      //
    }
  
    changeTitle(id, title) {
      //
    }
  
    sort(){
      //
    }
  
    async addFiltrButton(){
      const body = document.getElementById("todo-table")
      const header = body.children[0].children[0].children[1];
      header.innerHTML = `Użytkownik <div id="edit"><input id="button" type="button" value='Filtr' onclick='showBox();' >`; 
    }

    async render() {
      await this.#renderFunction(this.data, this.parent);
      await this.addFiltrButton();
      await changeUserName(this.#parent);
    }
  }
  
  
  async function todosTableRenderFunction(data, parent) {
    for (const item of data) {
      const row = document.createElement("tr");
      const keys = ["id", "userId", "title", "completed"];
      for (const key of keys) {
        const col = document.createElement("td");
        col.innerText = item[key];
        row.appendChild(col);
      }
      const actions = document.createElement("td");
      actions.appendChild(
        createButton("button", "Usuń", onClickDelete, ["btn", "btn-danger", "mx-1"])
      );
      actions.appendChild(
        createButton("button", "Edytuj", onClickEdit, ["btn", "btn-primary", "mx-1"])
      );
      row.appendChild(actions);
      parent.appendChild(row);
    }
  }
  
  function createButton(type, title, onclick, classes) {
    const button = document.createElement("button");
    button.innerText = title;
    button.setAttribute("type", type);
    button.onclick = onclick;
    button.classList.add(...classes);
    return button;
  }
  
  function onClickEdit(e) {
    const response = prompt("Wpisz nowy tytuł dla zadania <id>.");
    //
  };
  
  function onClickDelete(e) {
    let id = e.srcElement.parentElement.parentElement.children[0].innerText;
    if (confirm(`Czy na pewno usunąć zadanie ${id}?`)) {
      e.srcElement.parentElement.parentElement.innerHTML = "";
    }
  }
  
  const appendAlert = (message, type, parent) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    parent.append(wrapper);
  };

  async function changeUserName(todosBody){

    for(item of todosBody.children)
    {
      let field = item.children[1].innerText;
      let number = parseInt(field);
      await fetch('https://jsonplaceholder.typicode.com/users/'+number+'')
      .then(x => x.json())
      .then(x => {
      item.children[1].innerText = x.name;
      })
	  }
  }

  function hide(e)
  {
    let body = document.getElementById("todos").children
    if(e.value != "Wybierz opcje")
    {
      for(let item of body)
      {

        if(item.innerHTML != "" && item.children[1].innerHTML != e.value)
        {
          item.setAttribute("hidden","true")
        }
        
      }
      document.getElementById("edit").innerHTML += `<input id="button" type="button" value='X' onclick='resetBox();' >`
    }
    
    
  }

  function resetBox()
  {
    //this.render();
  }

  function showBox()
  {
    const divElement = document.getElementById("edit");
    const body = document.getElementById("todos").children;
    let text = `<select id="change" name='change' onchange='hide(this)'><option name='change' id='0'>Wybierz opcje</option>`
    let lastName = "";  
    let id = 0;
    for(item of body)
        {
          if(item.innerHTML == "")
            continue;
            let name = item.children[1].innerHTML;
            if(name !=lastName)
            {
                id++;
                lastName = name;
                text += `<option name='change' id='${id}'>${name}</option>`
    
            }
            
            console.log(id,name)
        }
      text += `</select>`;
      divElement.innerHTML = text;

  }

  window.onload = async function () {
    const todosBody = document.getElementById("todos");
    const alerts = document.getElementById("alerts");
    const service = new TodoService("https://jsonplaceholder.typicode.com", alerts);
    const todos = await service.getAllTodos();
    const todosTable = new TodosModel(todosBody, todos, todosTableRenderFunction);
    todosTable.render();
    
  };
