var lc=JSON.parse(localStorage.getItem("swiggyData")) || [];


var data = [{
    id: 1,
    name: "Meghana",
    img:"image1",
    rating: 4
},
{
    id: 1,
    name: "BodyPower",
    img:"image2",
    rating: 4
}, {
    id: 1,
    name: "Anant Food",
    img:"image3",
    rating: 4
}]

function searchBtn() {
    var search = document.getElementById("searchText").value;

    if (search == "" || search == null) {
alert("No Restaurants Found");
    }
else{
    var filteredProduct = data.filter(function (el) {
        if (el.name.toLowerCase().includes(search.toLowerCase())) return el;
    });
    displayProducts(filteredProduct);
}
}

function displayProducts(products){
    document.getElementById("showRestaurants").innerHTML = "";

    products.map(function (elem) {
        var divBox = document.createElement("div");

    //    var img = document.createElement("img");
    //    img.setAttribute("src",elem.img);
    //    img.setAttribute("class","imageClass");
       var name = document.createElement("div");
       name.setAttribute("class","nameClass");
       name.textContent=elem.name;
       divBox.append(name);
       document.getElementById("showRestaurants").append(divBox);


})
}