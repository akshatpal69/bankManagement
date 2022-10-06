console.log(loanInterestAmount(100,5,1))
function loanInterestAmount(principal,rate,time){
    // simpleinterest
    let siAmount = (principal*rate*time)/100
    let finalAmountPayable = principal+siAmount
    let SI={
        siAmount,
        finalAmountPayable
    }
    return SI
}

function emi(time,finalAmountPayable) {
    let time = time/365
    let monthlyEMI = finalAmountPayable/timeInMonths
}

function fdInterestAmount(){
    //siif less than 8 months
    let fdInterestAmount = (principal*rate*time)/100
    let finalAmountPayable = principal+siAmount
    let fd_data={
        fdInterestAmount,
        finalAmountPayable
    }
    return fd_data

    //compound if more than 8 months
    //A = P(1 + r/100)t FOR COMPOUND AMOUNT

    // P(1 + r/100)t - P   FOR COMPOUND INTREST

}

