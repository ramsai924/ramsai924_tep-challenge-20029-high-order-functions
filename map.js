function map(arr,func){
	for(let i=0;i<arr.length;i++){
		console.log(func(arr[i]));
	}
}
map([1,2,3,4], function(val){
	    return val * 2;
}); 
