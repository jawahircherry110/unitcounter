var feet = document.getElementById('feet');

var inch = document.getElementById('inch');


feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    inch.value = i;
});
inch.addEventListener('input', function(){
    let I = this.value;
    let f = I/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
});


var a;
var b;
var c;
var result = 0;
var avg = 0;

function calculate(){
    a=parseInt(form.num1.value);
    b=parseInt(form.num2.value);
    c=parseInt(form.num3.value);
    result= a+b+c;
    avg = result/3;
    document.write("your marks is " + result + "<br>"); 
    document.write(avg); 

    if(avg >=50){
        document.write("you are  eligible");
    }
    else{
        document.write("you are not eligible");
    }
    

}