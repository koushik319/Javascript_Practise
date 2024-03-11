function x(y)
{
    var a=10;
    console.log(a);
    y();
}
x(function y()
{
    var b=9;
    console.log(b);
})