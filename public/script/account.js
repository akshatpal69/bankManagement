const SERVER_IP = '192.168.251.129'
const SERVER_PORT = 80
window.onload = redirect()

document.getElementById('create_account_btn').addEventListener('click', async () => {
    let fnamecustomer = document.getElementById('housenumber').value
    let mnamecustomer = document.getElementById('mnamecustomer').value
    let mname2customer = document.getElementById('mname2customer').value
    let lnamecustomer = document.getElementById('lnamecustomer').value
    let phone = document.getElementById('phone').value
    let altphone = document.getElementById('altphone').value
    let email = document.getElementById('email').value
    let idaddress = document.getElementById('idaddress').value
    let housenumber = document.getElementById('housenumber').value
    let wardnumber = document.getElementById('wardnumber').value
    let street = document.getElementById('street').value
    let landmark = document.getElementById('landmark').value
    let village = document.getElementById('village').value
    let town = document.getElementById('town').value
    let post = document.getElementById('post').value
    let district = document.getElementById('district').value
    let state = document.getElementById('state').value
    let pincode = document.getElementById('pincode').value
    let country = document.getElementById('country').value
    let idcustomer = document.getElementById('idcustomer').value
    let accountnumber = document.getElementById('accountnumber').value
    let accounttype = document.getElementById('accounttype').value
    let branch = document.getElementById('branch').value
    let debitcard = document.getElementById('debitcard').value
    let creditcard = document.getElementById('creditcard').value
    let chequebook = document.getElementById('chequebook').value


    const result = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/account/createAccount`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fnamecustomer, mnamecustomer, mname2customer,
            lnamecustomer, phone, altphone, email, idaddress,
            housenumber, wardnumber, street, landmark, village,
            town, post, district, state, pincode, country, idcustomer,
            accountnumber, accounttype, branch, debitcard, creditcard, chequebook,
        }),
    }).then((res) => res.json());

})

document.getElementById('searchUser').addEventListener('click', async () => {
    const result = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/account/getAccount`, {
        method: "GET"
    }).then((res) => res.json());

let text = ''
text = Object.keys(result.response[0])
console.log(text.length)

//     for (let i = 0; i < Object.keys(result.response).length; i++) {
    
    //         // text += JSON.stringify(Object.keys(result.response[i]))
    
    //     // text += "<tr><th>" + JSON.stringify(Object.keys(result.response[i])) + "</th></tr>";
    //     // text += "<tr><td>" + JSON.stringify(result.response[i]) + "</td></tr>";
    // }
    let finalText = "<table border='1'>"
finalText+="<tr>"
    for (let j = 0; j < text.length; j++) {
        finalText += "<th>" + Object.keys(result.response[0])[j] + "</th>"
    }
    finalText+="</tr>"
    for (let i = 0; i < text.length; i++) {
        obj1 =result.response[i]
    //    console.log( Object.keys(result.response[0]))
       
        console.log(obj1.Object.keys(obj1)[i] )
        // obj = Object.values(obj1)
        // finalText += "<td>" + obj[i] + "</td>"
        // console.log(Object.values(result.response[]))
    }
    finalText += "</table>"
    document.getElementById("user_result").innerHTML = finalText;
    // console.log(finalText)
})
function redirect() {
    if (document.cookie.length < 1) {
        window.location.replace(`http://${SERVER_IP}:${SERVER_PORT}/login.html`)
    }
}