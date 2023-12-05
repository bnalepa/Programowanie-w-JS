const obj = {
    name: "Adam",
    age: 23,
    friends: ["Ewa", "Karol"],
    toJSON()
    {
        return `{"name": ${this.name}, "friends": ${this.friends.join(",")}}`
    }
};
//console.log(JSON.stringify(obj,["name","age"],"__"))
//produkowanie wlasnych wersji łańcucha

/* console.log(JSON.stringify(
    obj,
    (key,value) =>{
        switch(key){
        case "friends":
            return value.join(",");
        default:
            return value;
        }
    }
)) */
const json = JSON.stringify(obj);
const objFromJSON = JSON.parse(json,
    (key,value) =>{
        console.log(key);
        switch(key){
            case "friends":
                return value.split(",");
            default:
                return value;
        }
    }
    )
console.log(objFromJSON);
