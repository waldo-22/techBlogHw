const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log(req.body)
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


router.put('/:id', withAuth, async (req, res) => {
    console.log(req.body)
    try {
        const editedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(editedComment);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});


// router.get('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.findOne({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });

//         if (!commentData) {
//             res.status(404).json({ message: 'No Comment found with this id!' });
//             return;
//         }

//         const comment = commentData.get({ plain: true });
//         console.log(comment)
//         res.render('updateComment', {
//             title: Comment.title, text: Comment.body
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No Comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;