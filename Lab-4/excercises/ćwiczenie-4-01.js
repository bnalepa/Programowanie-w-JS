/**
 * Zdefiniuj klasę TodoTask opisująca zadanie do wykonania
 * Właściwości
 * - decription: opis tekstowy zadania
 * - deadline: ostateczny termin (data i czas) na wykonanie zadania
 * - finished: termin wykonania zadania
 * - done: pole logiczne oznaczające wykonanie zadania
 * - created: data i czas utworzenia zadania
 * Utworzone zadanie powinno:
 * - automatycznie dodawać bieżącą date i czas w polu created
 * - w polu done mieć wartość false
 * - w polu finished mieć wartość null
 * Próba utworzenia zadania z terminem z przeszłości w deadline powinno zgłosić błąd (wyjątek)
 * W utworzonym zadaniu:
 * - możliwa jest zmiana opisu (description)
 * - możliwa jest zmiana deadline pod warunkiem, że jest większy (późniejszy) od obecnej wartości tego pola
 * - możliwe jest ustawienie zadania jako wykonane (`done` na true), ale po 
 *   ustawieniu pola `done` na true nie można nic już zmienić (done, description, deadline itd.) 
 * - niemożliwe jest ustawianie pola finished, które powinno być automatycznie wypełniane (bieżąca data i czas) 
 *   podczas ustawiania pola done na true .
 * - niemożliwe jest ustawienia zadania jako wykonanego, jeśli bieżąca data jest późniejsza od deadline.
 * - zadanie po zatwierdzeniu lub po przekroczeniu deadlin'u nie może być zmieniane tzn.
 *   wywołanie któregokolwiek setter'a nie powinno nic zmieniać w zadaniu.
 *  Dopasuj konstruktor do przykładowego wywołania w testach.
 */

/*
TO DO 
 - możliwe jest ustawienie zadania jako wykonane (`done` na true) tylko raz, 

*/
class TodoTask {


    constructor(title, description, deadline, callback){
        if(deadline < Date.now())  throw new Error("Invalid deadline");
        this._title = title;
        this._created = Date.now();
        this._done = false;
        this._finished = null;
        this._description = description;
        this._deadline = deadline;
        this._callbackDate = callback;
    }
    checkDeadline()
    {
        if(this._deadline < Date.now())
        {
            throw new Error("Task is after deadline")
        } else if(this._finished != null){
            throw new Error("Task is done")
        }
    }
    set description(newDescription)
    {
        this.checkDeadline();
        this._description = newDescription;
    }
    set title(x)
    {
        throw new Error("You can't change title");
    }
    set finished(x)
    {
        throw new Error("You can't change finished state");
    }
    set created(x)
    {
        throw new Error("You can't change created date");
    }

    set deadline(newDeadline)
    {
        this.checkDeadline();
        if(newDeadline > this._deadline) 
        {
            this._deadline = newDeadline;
        } else {
            throw new Error("");
        }
    }

    set done(newState)
    {
        this.checkDeadline();
        if(newState == true && this._done == false && this._deadline > this._callbackDate())
        {
            this._done = true;
            this._finished = this._callbackDate();
        } else {
            throw new Error("Wrong value")
        }
    }

    get title()
    {
        return this._title;
    }
    get description()
    {
        return this._description;
    }
    get done()
    {
        return this._done;
    }
    get created()
    {
        return this._created;
    }
    get finished()
    {
        return this._finished;
    }
    get deadline()
    {
        return this._deadline;
    }
}

/*
const task = new TodoTask("JavaScript","Nauczyć się JavaScript'u", new Date(Date.parse("2024-01-30T00:00:00")), () => new Date(Date.now()));
console.log(task.title);
task.description = "!@3"
console.log(task.description);
console.log(task.done);
console.log(task.created);
task.done = true;
console.log(task.finished);
*/

// FIRST TEST SET

let task = new TodoTask("title", "description", new Date(Date.parse("2024-01-30T00:00:00")), () => new Date(Date.now()));
task.done = true;
try{
   task.description = "new";
   console.log("Failed");
} catch {
   console.log("Passed");
}
try{
   task.done = false;
   console.log("Failed");
} catch {
   console.log("Passed");
}
try{
   task.title = "";
   console.log("Failed");
} catch {
   console.log("Passed");
}
try{
   task.finished = null;
   console.log("Failed");
} catch {
   console.log("Passed");
}
if (task.finished.toString() === new Date(Date.now()).toString()){
   console.log("Passed");
} else {
   console.log("Failed");
}

