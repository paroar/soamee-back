import express from "express"
import cors from "cors"
import phoneRouter from "./router/phone.js"
import bodyParser from "body-parser"

var app = express();

app.use(cors())

app.use(bodyParser.json())

app.use('/phones', phoneRouter)



export default app