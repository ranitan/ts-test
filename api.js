function getproperties() {
    return fetch('one.json')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
getproperties()
    .then(function (properties) {
    console.log(properties.map(function (p) { return p.id + "\n " + p.pdescription + "\n " + p.pname + "\n " + p.price; }).toString());
});
function getFAPI() {
    fetch('https://fakestoreapi.com/products')
        .then(function (responce) { return responce.json(); })
        .then(function (json) { return console.log(json); });
}
getFAPI();
