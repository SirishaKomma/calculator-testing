function Calculator(){
    this.total=0;
}
Calculator.prototype.add=function(value){
return this.total+=value;
}

Calculator.prototype.sub=function(value){
   return this.total-=value;
}

Calculator.prototype.mul=function(value){
   return this.total*=value;
}

Calculator.prototype.div=function(value){
   return  this.total/=value;
}

