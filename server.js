const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')
let {SERVER_IP, SERVER_PORT, SERVER_PROTOCOL} = require('./env.js')

var morgan = require('morgan')

const authRoute = require("./routes/auth")
const accountRoute = require("./routes/account")
const fixedDepositRoute = require("./routes/fixedDeposit")
const loanRoute = require("./routes/loan")

const testRoute = require("./routes/test")



//middleware
app.use("/", express.static(path.join(__dirname, "public")))
app.use(morgan("dev"))
app.use(cors({ origin: '*'}));
app.use(express.json())

app.use('/api/auth', authRoute)
app.use("/api/account", accountRoute)
app.use("/api/Loan", loanRoute)
app.use("/api/fixedDeposit", fixedDepositRoute)

app.use("/api/test", testRoute)

app.listen(SERVER_PORT, () => {
  console.log(`app running on ${SERVER_PROTOCOL}://${SERVER_IP}:${SERVER_PORT}`)                             
}) 