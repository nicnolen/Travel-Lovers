const router = require("express").Router();
const {Place, User, Post } = require("../models/");
const withAuth = require("../utils/auth");

// GET all place for homepage
// router.get("/bucket-list", withAuth, (req, res) => {
//     Place.findAll({
//         // include: [User],
//         // where: {
//         //     userId: req.session.userId
//         // }
//     })

//         .then((dbPlaceData) => {
//             const places = dbPlaceData.map((place) => place.get({ plain: true }));
  
//             res.render("bucket-list", {
//                 layout: "dashboard",
//                 places });
//         })
//         .catch((err) => {
//             res.status(500).json(err);
//         });
//   });

//   / GET all place for homepage
  router.get("/", (req, res) => {
    Place.findAll({
        // include: [User],
    })
        .then((dbPlaceData) => {
            const places = dbPlaceData.map((place) => place.get({ plain: true }));
  
            res.render("dashboard", {
                places });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
  });

// router.get("/new", withAuth, (req, res) => {
// res.render("new-post", {
//     layout: "dashboard"
// });
// });
  
// router.get("/edit/:id", withAuth, (req, res) => {
//     Post.findByPk(req.params.id)
//         .then(dbPostData => {
//             if (dbPostData) {
//                 const post = dbPostData.get({ plain: true });

//                 res.render("edit-post", {
//                     layout: "dashboard",
//                     post
//                 });
//             } else {
//                 res.status(404).end();
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         });
// });
  module.exports = router;