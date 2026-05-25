console.log("************** DELIVERABLE 03 *********************");

const source = {
    name: "Maria",
    surname: "Ibañez",
    country: "SPA"
}

const target ={
    name: "Luisa",
    age: 31,
    married: true    
}

const clone = (source) => {
    const result = {};
    for(const key in source){
        result[key] = source[key];
    }
    return result
}
const merge = (source, target) => {
    const result = clone({...target,...source})
    return result
}

console.log(clone(source))
console.log(merge(source, target))
