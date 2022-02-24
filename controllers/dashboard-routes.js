const router = require("express").Router();
const {Place, User, Post,} = require("../models/");
const withAuth = require("../utils/auth");




// GET all travel post for homepage
router.get("/traveling", (req, res) => {
    Post.findAll({
        where: {
            topic: 'TRAVELING'
        }
    })
        .then(posts => {
        
            const traveling_posts = posts.map((travel) => travel.get({ plain: true }));
            console.info("look: " + JSON.stringify(traveling_posts));
            res.render("traveling", {
                layout: "main",
                traveling_posts
            });

        })
        .catch(err => {
            console.error(err);
            // res.redirect("login");
        });
  });
router.get("/", (req, res) => {
    Post.findOne({
        where: {
            topic: 'TRAVELING'
        }
    })
        .then(traveling_post => {
            console.info("look "+JSON.stringify(traveling_post));
            // const posts = dbPostData.map((post) => post.get({ plain: true }));
  
            res.render("dashboard", {
                layout: "main",
                traveling_post
            });
        })
        .catch(err => {
            console.error(err);
        });
  });
  
  router.get("/traveling/new", (req, res) => {
    res.render("new-post", {
        
    });
  });
  
  router.get("/traveling/edit/:id", (req, res) => {
    Post.findByPk(req.params.id)
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });
  
                res.render("edit-post", {
                    layout: "main",
                    post
                });
            } else {
                res.status(404).end();
            }
            console.info(dbPostData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
  });

  // GET all lifestyle post for homepage
  router.get("/lifestyle", (req, res) => {
    Post.findAll({
        where: {
            topic: 'LIFESTYLE'
        }
    })
        .then(posts => {
        
            const lifestyle_posts = posts.map((lifestyle) => lifestyle.get({ plain: true }));
            console.info("look: " + JSON.stringify(lifestyle_posts));
            res.render("lifestyle", {
                layout: "main",
                lifestyle_posts
            });

        })
        .catch(err => {
            console.error(err);
            // res.redirect("login");
        });
  });


router.get("/", (req, res) => {
    Post.findOne({
        where: {
            topic: 'LIFESTYLE'
        }
    })
        .then(lifestyle_post => {
  
            res.render("dashboard", {
                layout: "main",
                lifestyle_post
            });
        })
        .catch(err => {
            console.error(err);
            // res.redirect("login");
        });
  });
  
  router.get("/lifestyle/new", (req, res) => {
    res.render("new-post", {
        
    });
  });
  
  router.get("/lifestyle/edit/:id", (req, res) => {
    Post.findByPk(req.params.id)
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });
  
                res.render("edit-post", {
                    layout: "main",
                    post
                });
            } else {
                res.status(404).end();
            }
            console.info(dbPostData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
  });

  // GET all bucketlist post for homepage
router.get("/bucketlist", (req, res) => {
    Post.findAll({
        where: {
            topic: 'BUCKETLIST'
        }
    })
        .then(posts => {
        
            const bucketlist_posts = posts.map((bucketlist) => bucketlist.get({ plain: true }));
            console.info("look: " + JSON.stringify(bucketlist_posts));
            res.render("bucketlist", {
                layout: "main",
                bucketlist_posts
            });

        })
        .catch(err => {
            console.error(err);
            // res.redirect("login");
        });
  });
  
  router.get("/bucketlist/new", (req, res) => {
    res.render("new-post", {
        
    });
  });
  
  router.get("/bucketlist/edit/:id", (req, res) => {
    Post.findByPk(req.params.id)
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });
  
                res.render("edit-post", {
                    layout: "main",
                    post
                });
            } else {
                res.status(404).end();
            }
            console.info(dbPostData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
  });





  module.exports = router;
