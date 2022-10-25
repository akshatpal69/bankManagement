const SERVER_IP = '192.168.251.129'
const SERVER_PORT = 80
window.onload = redirect()
function redirect(){
    if(document.cookie.length<1){
        console.log('hosla')
        location.replace(`http://${SERVER_IP}:${SERVER_PORT}/login.html`)
        // window.location.replace = "localhost"//
    }
}