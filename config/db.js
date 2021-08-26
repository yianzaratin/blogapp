if (process.env.NODE_ENV == "production"){
    module.exports = { mongoURI: "mongodb://yian:deus2014@blogapp.mglem.mongodb.net/myFirstDatabase"}
}else{
    module.exports = { mongoURI: "mongodb://localhost/blogapp"}
}