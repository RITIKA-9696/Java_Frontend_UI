async function test() {
    const productId = document.getElementById("pId").value;

    const url = "https://dummyjson.com/products/"+productId;
    
    const data =  await fetch(url ,{method: "GET"});
    
    const finalData = await data.json();
    
    console.log("OUR DATA:- ", finalData);

   document.getElementById("d1").innerHTML = 
   "<h1 style='color: red'> PRODUCT NAME:- "+ finalData.title + "</h1> <h1 style='color: pink'> PRODUCT PRICE:- "+ finalData.price + "</h1> <h1 style='color: pink'> PRODUCT DESC:- "+ finalData.description + "</h1>";
}