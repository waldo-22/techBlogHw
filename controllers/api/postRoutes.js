const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  console.log(req.body)
  try {
    const editedPost = await Post.update( req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(editedPost);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    const post = postData.get({ plain: true });
    console.log(post)
    res.render('updatePost', {
      title: post.title, text: post.body
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No Post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
