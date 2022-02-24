const router = require("express").Router();
const { Post } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", (req, res) => {
    const body = req.body;
    console.log(req.session.userId);
    Post.create({ ...body, userId: req.session.userId })
        .then(newPost => {
            res.json(newPost);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put("/:id",  (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(affectedRows => {
            if (affectedRows > 0) {
                res.status(200).end();
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete("/:id",  (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(affectedRows => {
            if (affectedRows > 0) {
                res.status(200).end();
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;