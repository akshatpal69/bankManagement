const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')
let {SERVER_IP, SERVER_PORT, SERVER_PROTOCOL} = require('./env.js')

var morgan = require('morgan')

const connection = require("./database")
const accountRoute = require("./routes/account")
const fixedDepositRoute = require("./routes/fixedDeposit")
const loanRoute = require("./routes/loan")
const testRoute = require("./routes/testRoute")

//middleware
app.use(morgan("dev"))
app.use(cors({ origin: '*'}));
app.use(express.json())

app.use("/api/account", accountRoute)
app.use("/api/Loan", loanRoute)
app.use("/api/fixedDeposit", fixedDepositRoute)
app.use("/api/testroute", testRoute)


// app.use(function (req, res, next) {
//   return res.status(200).json({ok:'home route, server.js line 21'})
// })

app.listen(SERVER_PORT,  () => {
  console.log(`app running on ${SERVER_PROTOCOL}://${SERVER_IP}:${SERVER_PORT}`)
                                    
}) 