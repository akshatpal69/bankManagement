const SERVER_IP = '192.168.251.129'
const SERVER_PORT = 80
const IPINFO_SERVER_URL = `https://ipinfo.io`
let empClientIP
$.get(IPINFO_SERVER_URL, function (response) {
    empClientIP = response.ip
    console.log(empClientIP)
}, "json")

let form = document.getElementById('empLOGIN')
form.addEventListener('submit', empLOGIN)

async function empLOGIN(event) {
    event.preventDefault()
    const empname = document.getElementById('empname').value
    const password = document.getElementById('password').value
    const result = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            empname,
            password,
            empClientIP
        })
    }).then((res) => res.json());
    document.getElementById('status').innerHTML = result.response
    console.log(result.response)
    localStorage.setItem("employeeName", result.name);
    redirect()
}


window.onload = redirect()
function redirect(){
    if(document.cookie.length>0){
        location.replace(`http://${SERVER_IP}:${SERVER_PORT}`)
    }
}

document.getElementById('logout').addEventListener('click', async()=>{
    const result = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/auth/logout`, {
        method: 'get'
    }).then((res) => res.json());
    localStorage.removeItem("employeeName")    
})