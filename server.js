const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the server" });
});

app.use(...);

const db = require("./app/models");
const Role = db.role;

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,    
    })
    .then(() => {
        console.log("Successfully connected to the database");
        initial();
    })
    .catch(err => {
        console.error("Connection error",err);
        process.exit();
    });

function initial(){
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0){
            new Role({
                name: "user"
            }).save(err => {
                if(err){
                    console.log("Error", err);
                }
                console.log("Added user to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if(err){
                    console.log("Error", err);
                }
                console.log("Added moderator to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if(err){
                    console.log("Error", err);
                }
                console.log("Added admin to roles collection");
            });
        }
    });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}).on("error", (err) => {
    console.log(err);
});

