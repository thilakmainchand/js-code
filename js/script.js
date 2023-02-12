var arr =[1,2,3,4,5];
var b=arr;
while(arr.length>0){
    arr.pop();
}
console.log(b);
console.log(arr);



let str="Welcome to this Javascript Guide! ";
let str1=str.split("").reverse().join("");

let str2=str1.split(" ").reverse().join(" ");


console.log(str2);



var nn="H.Wells"
  var ar1 = nn.split(".");
  let length=ar1.length;
  function isLowerCase(str) {
    return str === str.toLowerCase();
}
    if(length==1||ar1[0].length>1){
        console.log("false");
        
    }
    else if(isLowerCase(ar1[ar1.length-1].charAt(0))){
        console.log("false");
        
    }
    else if((ar1[0].length>=1 && isLowerCase(ar1[0]))){
        console.log("false");
       
    }
    else if((ar1[1].length!=1 || (ar1[1].length==1 && isLowerCase(ar1[1].charAt(0))))&&ar1.length>=3){
        console.log("false");
     
    }
    else{
        console.log("true");
    }



    var g1="Mary".toLowerCase();
var g2="Army".toLowerCase();
var h1=[...g1]
var h2=[...g2]
console.log(h1.sort().join("")==h2.sort().join(""));



var a2=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<5;i++){
    a2.pop();
}
console.log("after deque");
console.log(a2)
let ai=5;
for(var i=0;i<5;i++){
    a2.unshift(ai++);
}
console.log("after enqueue");
console.log(a2)


