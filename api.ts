interface properties
{
        "id": number,
        "pname": string,
        "pdescription": string,
        "price": number
}


function getproperties(): Promise<properties[]> {
    return fetch('one.json')
        .then(res => res.json())
        .then(res => {
            return res as properties[]
        })
    }

    getproperties()
    .then(properties => {
       console.log(properties.map(p=>p.id+"\n "+p.pdescription+"\n "+p.pname+"\n "+p.price).toString())});
    
function getFAPI() {
    fetch('https://fakestoreapi.com/products')
        .then(responce => responce.json())
        .then(json => console.log(json));
}
getFAPI();
    
    