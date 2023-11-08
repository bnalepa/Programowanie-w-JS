/**
 * Zdefiniuj funkcję, która liczy wystąpienia liter w łańcuchu.
 * Wynikiem funkcji jest mapa w postaci:
 * Map(3) {size: 3, a => 2, c => 5, b => 4}
 * Przykład
 * console.log(frequences("abcdagcc"));
 * Map(5) {size: 5, a => 2, b => 1, c => 3, d => 1, g => 1}
 */
function frequences(str){

    str = [...str];
    let map = new Map();
    for(let i = 0; i<str.length; i++)
    {
        let letter = str[i];
        if(map.has(letter))
        {
            map.set(letter, map.get(letter)+1)
        } else {
            map.set(letter, 1)
        }
    }
    return map;
}

console.log(frequences("abcdagcc"));

try{
    const r = frequences("abcdagcc");
    if (r.size === 5
        && r.has('a')
        && r.has('b')
        && r.has('c')
        && r.has('d')
        && r.get('a') === 2
        && r.get('b') === 1
        && r.get('c') === 3
        ){
            console.log("Test 31 passed")
        } else {
            console.log("Test 31 failed")
        }
} catch(e){
    console.log("Test 31 failed")
}
try {
    const str = [...Array(10000).fill('a'), ...Array(10000).fill('b'), ...Array(10000).fill('h')].join("") ;
    const start = performance.now();
    const r = frequences(str);
    const end = performance.now();
    if (r.size === 3
        && r.has('a')
        && r.has('b')
        && r.has('h')
        && r.get('a') === 10000
        && r.get('b') === 10000
        && r.get('h') === 10000
        && (end - start) < 30
    ) {
        console.log("Test 32 passed")
    } else {
        console.log("Test 32 failed")
    }
} catch (e) {
    console.log("Test 32 failed")
}


// TEST SET
	
const r = frequences("ąbc👍dągc👍c👍");
console.log(r.size);
console.log(r.get('ą'));
console.log(r.get('b'));
console.log(r.get('c'));
console.log(r.get('👍'));

console.log(r)

// TEST SET v2


/* const c1 = Math.floor(Math.random() * 1000);
const c2 = Math.floor(Math.random() * 1000);
const str = [...Array(c1).fill('a'), ...Array(c2).fill('b'), ...Array(10000).fill('h')].join("") ;
const start = new Date();
const r = frequences(str);
const end = new Date();
console.log(r.size);
console.log(r.get('a') == c1);
console.log(r.get('h') == 10000);
console.log(r.get('b') == c2);
console.log(end - start < 200); */