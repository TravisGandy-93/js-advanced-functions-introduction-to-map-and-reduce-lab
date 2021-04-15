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

const reduceToTotal = (array, startval) => array.reduce(function(total, element){ return element + total}, startval);

const reduceToAllTrue = (array) => array.reduce(function(total, element){ return total && Boolean(element)}, true)

const reduceToAnyTrue = (array) => array.reduce(function(total, element){ return element ?  true : false }, true)