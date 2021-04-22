// Your code here
function mapToNegativize(array) {
    var i, l,
        temp = [];
    for (i = 0, l = array.length; i < l; i++) {
        temp.push(-array[i]);
    }
    return temp;
}
    
function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    var i, l,
        temp = [];
    for (i = 0, l = array.length; i < l; i++) {
        temp.push(array[i] * 2);
    }
    return temp;
}

function mapToSquare(array) {
    var i, l,
        temp = [];
    for (i = 0, l = array.length; i < l; i++) {
        temp.push(Math.pow(array[i], 2));
    }
    return temp;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i=0; i<sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i=0; i<sourceArray.length; i++) {
        if (!sourceArray[i]){
            return false;
        } 
    }
    return true 
}

function reduceToAnyTrue(sourceArray) {
    for (let i=0; i<sourceArray.length; i++) {
        if (sourceArray[i]){
            return true;
        } 
    }
    return false;
}