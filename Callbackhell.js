var cart=["shoes","tie"];
createorder(cart, function(){
    Payment(cart,function(){
        walletupdate(payment,function(){

        })
    })
})

