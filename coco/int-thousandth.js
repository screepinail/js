// refer jianglei's code, made some change
function dataFormat(param) {
    // make sure 'string' type
    if ( typeof param != "string") {
    	param += '';
    }
    var str = $.trim(param);
    var strArr = [], integer = str.split("").reverse().join("");
    for (var i = 0; i < integer.length; i++) {
	strArr.push(integer[i]);
	if (i % 3 == 2 && i != (integer.length - 1)) {
	    strArr.push(",");
	}
    }
    strArr.reverse();
    return strArr.join("");
}
