var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app){
    //verify the user (user authentication)
    app.post("/api/login",passport.authenticate("local") ,function(req,res){
        console.log(req.user);
        res.json(req.user);
    })
    app.get("/api/user_resume", function(req, res) {
        if (!req.user) {
          res.json({});
        } else {
            db.Resume.findAll({
                where:{
                    userId : req.user.id
                }
            })
            .then(function(result){
                console.log(result);
                res.json(result);
            })
            .catch(err =>{
                console.log(err);
            })
        }
      });
    app.get("/api/user_data", function(req,res){
        if(!req.user){
            res.json({});
        }else{
            res.json(req.user);
        }
    })
    app.post("/api/signin", function(req,res){
        console.log(req.body);
        db.User.create(req.body)
        .then(function(result){
            console.log(result);
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
        })
    })
        

    app.post("/api/newResume", (req, res) => {
        db.Resume.create(req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
    });


    // router.post("/api/:resumes", (req,res) => {
    //     db.Resume.create(req.body)
    //     .then((result) => {
    //         res.json(result);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // })

    //route to get all resumes for user
    app.get('/api/:userId', (req, res) => {
        db.User.findAll({
            where: {
                userId: req.params.id
            }
        }).then((result) => {
            return res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })
    
    //route to get specific resume Id
    app.get('/api/:resumeId', (req, res) => {
        db.Resume.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            return res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })

    //route to update resume
    app.put('/api/resumes/:id', (req, res) => {
        db.Resume.update(req.body, {
            where: {
                id: req.params.id,
            }
        }).then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })

    //route to get specific resume Id
    app.get('/templateOne/:resumeId', (req, res) => {
        db.Resume.findOne({
            where: {
                id: req.params.resumeId
            }
        }).then((result) => {
            // return res.json(result);
            res.render("templateTwo", result);
        }).catch((err) => {
            console.log(err);
        })
    })

}