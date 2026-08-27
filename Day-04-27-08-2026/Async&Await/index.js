function placeOrder(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Order Placed Successfully");
        },1000);
    })
}
function prepareFood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Order Prepared")},2000);
    });
}
function deliverFood(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Order Delivered")},1500);
    });
}
async function orderFood(){
    const order = await placeOrder();
    console.log(order);

    const food = await prepareFood();
    console.log(food);

    const delivery = await deliverFood();
    console.log(delivery);
}
orderFood();