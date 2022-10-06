const SERVER_IP = '192.168.218.129'
const IPINFO_SERVER_URL= `https://ipinfo.io`
let clientIP
$.get(IPINFO_SERVER_URL, function (response) {
    clientIP = response.ip
}, "json")
console.log(SERVER_IP)
let form = document.getElementById('empLOGIN')
form.addEventListener('submit', empLOGIN)

async function empLOGIN(event) {
    event.preventDefault()
    const empid = document.getElementById('empid').value
    const emppass = document.getElementById('emppass').value
    console.log(empid)
    console.log(emppass)
    console.log(clientIP)
        const result = await fetch(`http://${SERVER_IP}:80/api/requests/findusers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                empid,
                emppass,
                clientIP
            })
        }).then((res) => res.json());
        
        //     // everythign went fine
        //     alert('Success')
        // } else {
        //     alert(result.error)
        // }
        
}
alert('hi')
