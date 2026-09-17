const products=[]; 
document.getElementById("addProduct")
.addEventListener("click",()=>{
    const name=document.getElementById("productName").value;
    products.push(name);
    renderProducts();
});
function renderProducts(){
    const list=document.getElementById("products");
    list.innerHTML="";
    products.forEach((product,index)=>{
        const li=document.createElement("li");
        li.innerHTML=`${product}<button onclick="deleteProduct(${index})">Delete</button>`;
        list.appendChild(li);
    });
}
function deleteProduct(index){
    products.splice(index,1);
    renderProducts();
}