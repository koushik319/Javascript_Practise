function attach()
{
    let count=0
    document.getElementById("click").addEventListener("clicked",function a(){
    console.log("Button Clicked",++count);
});
}
attach();
