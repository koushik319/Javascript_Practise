const cart=["shoes","tie"];

const promise = createorder(cart);
promise.then(function()
{
    proceedtopayment(orderid);
})