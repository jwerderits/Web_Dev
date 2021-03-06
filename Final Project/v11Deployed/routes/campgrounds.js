var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");


//INDEX - show all campgrounds
router.get("/", function(req,res){
    //get all campgrounds from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        } else {
           res.render("campgrounds/index",{campgrounds:allCampgrounds}); 
        }
    });
    // res.render("campgrounds",{campgrounds:campgrounds});
});

//CREATE - add new campgrounds to DB
router.post("/", middleware.isLoggedIn, function(req,res){
   //get data from form and add to array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = {name:name,image:image,description:desc, author: author};
    // create new campground and save to DB
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/campgrounds");
        }
    })
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req,res){
   res.render("campgrounds/new"); 
});

//SHOW shows more information about one campground
router.get("/:id",function(req,res){
    //find the campground with matching ID
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with matching campground
            console.log(foundCampground);
            res.render("campgrounds/show",{campground:foundCampground});
        }
    })

});


//Edit
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    //test if user is logged in
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit",{campground: foundCampground});
    });
});

//Update
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    //find and update campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {
            //redirect to show page
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//Destroy campground route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;