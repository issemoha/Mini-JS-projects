function remove_spaces(str1){
    while(str1.includes(" ")){
        str1 = str1.replace(" ", "");
    }
    return str1;
}
function isEven(num){
    if(!(num%2)){
        $("#isEven_result").html(num+" is an even number");
    }
    else{
        $("#isEven_result").html(num+" is an odd number");
    }
    if(num.toString().length==0){
        $("#isEven_result").html("");
    }
}
function isPrime(num){
    var divs = [];
    for(var i=2;i<num;i++){
        if(num%i==0){
            divs.push(i);
        }
    }
    if(divs.length==0){
        $("#isPrime_result").html(num+" is a prime number");
    }
    else{
        $("#isPrime_result").html(num+" isn't a prime number<br/><button onclick='alert(\""+divs.join(", ")+"\")'>see divisors</button>");
    }
    if(num.toString().length==0){
        $("#isPrime_result").html("");
    }
}
function getFactorial(n){
    if(n<1){
        return 1;
    }
    else{
        return n * getFactorial(n-1);
    }
}
function factorial(number){
    $("#factorial_result").html(parseInt(number)+"! = "+getFactorial(number));
    if(number.toString().length==0){
        $("#factorial_result").html("");
    }
}
function palindrome(string){
    if(document.getElementById("palindrome_checkbox").checked){
        string = string.toLowerCase();
    }
    if(document.getElementById("palindrome_spaces").checked){
        string = remove_spaces(string);
    }
    var reversed = string.split("").reverse().join("");
    if(reversed==string){
        $("#palindrome_result").html(string+" is a palindrome string<br/>"+string+"=="+reversed);
    }
    else{
        $("#palindrome_result").html(string+" isn't a palindrome string<br/>"+string+"!="+reversed);
    }
    if(string.length==0){
        $("#palindrome_result").html("");
    }
}
function isDivisable(num, div){
    if(num%div==0){
        $("#div_result").html(num+" is divisable by "+div+"<br/>"+num+"/"+div+"="+num/div);
    }
    else{
        $("#div_result").html(num+" isn't divisable by "+div+"<br/>"+num+"%"+div+"="+num%div);
    }
    if(num==""||div==0){
        $("#div_result").html("")
    }
}





