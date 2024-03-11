setTimeout(function(){
    console.log("Hello");
},5000)

function x(y)
{
    console.log("x called");
    y();
}
x(function y(){
    console.log("y called");
})