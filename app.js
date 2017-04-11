var mymodule=angular.module("myapp",[]);
mymodule.controller("mycal", cal);
function cal(){
    this.result=0;
    this.clicked=function(button){
this.operation=button;
        console.log("testedddd");
    }
 this.calculate= function(){
     var num1=parseFloat(this.value1);
     var num2=parseFloat(this.value2);
if(this.operation==='+'){
this.result=num1 + num2;
}
else if(this.operation==='-'){
this.result=num1 - num2;
}
else if(this.operation==='*'){
this.result=num1 * num2;
}
else if (this.operation==='/'){
this.result=num1 / num2;
}
 
 }
}