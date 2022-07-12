const express = require("express");
const app = express();
app.use(express.json());

//isso eh uma rota
const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);
//------------------------------

const userAddress = require ("./routes/address.routes");
app.use("/address",userAddress);




app.listen(4000, () => {
  console.log("servido vuano no 4000");
});
