//d--data, r--sort row, f--flag false: desc true: asc
function sortData(d, r, f){
    var data = $.extend(true,[],d),
	rst = {},
	arr = [],
	len = data.length;

    // use this simple calc mathed to avoid more object copy
    function getMax(a, r){
	var max = a[0][r], idx = 0;
	for(var i = 0; i < (a.length - 1); i++){
	    if(a[i+1] && (max < a[i+1][r])){
		max = a[i+1][r];
		idx = i+1;
	    }
	}
	return idx;
    }

    //get sort
    for(var i = 0; i < (len - 1); i++){
	var maxIdx = getMax(data, r);
	arr.push(data[maxIdx]);
	data.splice(maxIdx,1);
    }
    return arr;
}
