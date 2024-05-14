$('#btn').click(function () { 
    $("#dt").html("We are using JQ");
});


$("#btn").mouseover(function () { 
    $("#dt").html("Hello");
});


$("#btn").mouseleave(function () { 
    $("#dt").html("Bye");
});


$("#btn-srh").click(function () { 
    fetchProductData();
});

$grid


async function fetchProductData() {
    const productId = $("#inp").val();
    const url = "https://dummyjson.com/products/"+productId;
    const result = await fetch(url, {method: "GET"});
    const finalResult = await result.json();

    $("#result").html("<h1 style='color: pink'> Product Name:-" +finalResult.title + "</h1>");
}