const express = require("express");
const app = express();
let {SERVER_IP, FILE_SERVER_PORT, SERVER_PROTOCOL} = require('../env')



const path = require('path')
const cors = require('cors');

var morgan = require('morgan')

// const connection = require("./database")
// const requestRoute = require("./routes/request");

//middleware
app.use(morgan("dev"))

app.use(cors({ origin: '*'}));
app.use('/', express.static(path.join(__dirname, '/')))
app.use(express.json());
// app.use("/api/requests", requestRoute);

// app.use(function (req, res, next) {
//   return res.status(200).json({ok:'home route, server.js line 21'})
// })

app.listen(FILE_SERVER_PORT,  () => {
  console.log(`app running on ${SERVER_PROTOCOL}://${SERVER_IP}:${FILE_SERVER_PORT}`)
                                    
}) 