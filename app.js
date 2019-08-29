var express       = require("express");
var app           = express();
var bodyParser    = require("body-parser");
var mongoose      = require("mongoose");
var flash         = require("connect-flash");
var passport      = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride= require("method-override");
var Campground    = require("./models/campground");
var User          = require("./models/user");
var Comment       = require("./models/comment");
var seedDB        = require("./seeds");


var campgroundRoutes  = require("./routes/campgrounds"),
	commentRoutes     = require("./routes/comments"),
	indexRoutes       = require("./routes/index");
	

var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_new";
mongoose.connect(url,{ useNewUrlParser: true });


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

//passport configuration
app.use(require("express-session")({
	secret:"Will is the best boy",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	res.locals.error = req.flash("error")
	res.locals.success = req.flash("success")
	next();
})


app.use(indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);

app.listen(process.env.PORT||3000, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});