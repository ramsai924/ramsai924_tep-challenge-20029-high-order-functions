function each(arr,func){
    for(let i=0;i<arr.length;i++){
        func(arr[i]);
    }
}


each([1,2,3,4], function(val){
    console.log(val);
});

//------



function each(arr,func){
  
   for(let j=0;j<arr.length;j++){
       func(arr[j]);
   }
}

each([1,2,3,4], function(val){
    console.log(val*2);
});