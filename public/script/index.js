const SERVER_IP = '192.168.251.129'
const SERVER_PORT = 80
window.onload = redirect()
document.getElementById("welcometext").innerHTML = localStorage.getItem('employeeName')
document.getElementById('logout').addEventListener('click', async () => {
    const result = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/auth/logout`, {
        method: 'get'
    }).then((res) => res.json());
    localStorage.removeItem("employeeName")
    redirect()
})

document.getElementById('account_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/account.html`)
})
document.getElementById('debitcard_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/card.html`)
})
document.getElementById('edit_customer_details_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/customer.html`)
})
document.getElementById('check_balance_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/fixedDeposit.html`)
})
document.getElementById('freeze_account_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/account.html`)
})
document.getElementById('delete_lost_debit_card_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/card.html`)
})
document.getElementById('block_lost_credit_card_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/card.html`)
})
document.getElementById('fixed_deposit_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/fixedDeposit.html`)
})
document.getElementById('netbanking_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/netBanking.html`)
})
document.getElementById('deposit_emiPayment_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/loan.html`)
})
document.getElementById('deposit_money_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/money.html`)
})
document.getElementById('withdraw_money_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/money.html`)
})
document.getElementById('transfer_money_btn').addEventListener('click', () => {
    location.replace(`http://${SERVER_IP}:${SERVER_PORT}/money.html`)
})





function redirect() {
    if (document.cookie.length < 1) {
        location.replace(`http://${SERVER_IP}:${SERVER_PORT}/login.html`)
    } else {
        return 0
    }
}