var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObj = {
            burgers: Data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body["burger_name"], req.body.devoured
    ], (result) => {
        res.json(result);
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var burgerId = req.params.id;
    var condition = "id = " + burgerId;

    console.log("condition", condition);

    burger.updateOne(["devoured"], [req.body.devoured], condition, (result) => {
        res.json(result);
    });
});

module.export = router;


