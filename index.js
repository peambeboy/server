const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('./models');


// Routers
const emailRouter = require('./routes/EmailAdmin');
app.use("/check-admin",emailRouter);

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const userinfoRouter = require('./routes/Userinfo');
app.use("/save-info", userinfoRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
