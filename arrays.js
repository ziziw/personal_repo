function printReverse(arr){
	for (var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var bool = true;
	var count;
	for (var i = 0; i < arr.length; i++){
		if (i === 0){
			count = arr[i];
		} else {
			if (arr[i] !== count){
				bool = false;
			}
		}
	}
	return bool;
}

function sumArray(arr){
	var count = 0;
	for (var i = 0; i < arr.length; i++){
		count += arr[i];
	}
	return count;
}

function max(arr){
	var numb = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > numb){
			numb = arr[i];
		}
	}
	return numb;
}