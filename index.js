function myEach(collect, cb){
    const newArray = standardize(collect)
    let i = 0;
    while(i < newArray.length){
        cb(newArray[i]);
        i = i+1
    }
    return collect
}

function myMap(collect, cb){
    const newArray = standardize(collect)
    let i = 0;
    let newArray1 = []
    while(i < newArray.length){
        newArray1.push(cb(newArray[i]));
        i = i+1
    }
    return newArray1
}

function myReduce(collect, cb, a){
    if (Array.isArray(collect)) {
        return a !== undefined ? collect.reduce(cb, a) : collect.reduce(cb)
    } else if (typeof collect === 'object') {
        const values = Object.values(collect);
        return a !== undefined ? values.reduce(cb, a) : values.reduce(cb)
    } else {
        throw new TypeError('undefined')
    }
}

function myFind(collect, pred){
    let newArray = standardize(collect);
    let i = 0
    while(i < newArray.length){
        if (pred(newArray[i]) === true ){
            return newArray[i]
        }
        i = i+1
    } 
}

function myFilter(collect, pred){
    let results = []
    if (Array.isArray(collect)) {
        for (let i = 0; i < collect.length; i++) {
            if (pred(collect[i], i, collect)) {
                results.push(collect[i]);
            }
        }
    } else {
        let values = Object.values(collect);
        for (let i = 0; i < values.length; i++) {
            if (pred(values[i], Object.keys(collect)[i], collect)){
                results.push(values[i]);
            }
        }
    }
    return results
}

function mySize(collection){
    let newCollection = standardize(collection);
    let collectionSize = 0;
    let i = 0
    debugger;
    while (newCollection[i] !== undefined){
        collectionSize = (collectionSize + 1);
        i = i+1;
    } return collectionSize
}

function standardize (collection){
    if(Array.isArray(collection)){
        return collection
    } else {
        return Object.values(collection)
} };

function myFirst(array, n){
    let firstOf = []
    let i = 0
    if(n=== undefined){
        return array[0]
    } else {
        while (n>0){
            debugger;
            firstOf.push(array[i]);
            debugger;
            n = n-1;
            debugger;
            i = i +1;
        } return firstOf
    }
}

function myLast(array, n){
    let lastOf = []; 
    if(n === undefined){
        let i = array.length - 1;
        return array[i];
    } else {
        while (n>0){
            let i = array.length - n;
            lastOf.push(array[i]);
            n = n - 1;
            i = i + 1;
        } return lastOf
    }
}

function myKeys(object){
    let results = [];
    for (const key in object){
        results.push(`${key}`)
    }
    return results
}

function myValues(object){
    let results = [];
    for (const property in object){
        results.push(object[`${property}`])
    }
    return results
}
