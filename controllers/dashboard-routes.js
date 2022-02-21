// const router = require('express').Router();
// const { Gallery, Painting, Place } = require('../models');
// // Import the custom middleware
// // const withAuth = require('../utils/auth');

// // GET all place for homepage
// router.get('/place', async (req, res) => {
//   try {
//     const dbPlaceData = await Place.findAll({
//       include: [
//         {
//           model: Place,
//           attributes: ['city', 'date'],
//         },
//       ],
//     });

//     const places = dbPlaceData.map((gallery) =>
//         place.get({ plain: true })
//     );

//     res.render('homepage', {
//         places,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one gallery
// // Use the custom middleware before allowing the user to access the gallery
// router.get('/place/:id', withAuth, async (req, res) => {
//   try {
//     const dbPlaceData = await Place.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const place = dbPlaceData.get({ plain: true });
//     res.render('place', { place, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one painting
// // Use the custom middleware before allowing the user to access the painting
// // router.get('/painting/:id', withAuth, async (req, res) => {
// //   try {
// //     const dbPaintingData = await Painting.findByPk(req.params.id);

// //     const painting = dbPaintingData.get({ plain: true });

// //     res.render('painting', { painting, loggedIn: req.session.loggedIn });
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json(err);
// //   }
// // });

// // router.get('/login', (req, res) => {
// //   if (req.session.loggedIn) {
// //     res.redirect('/');
// //     return;
// //   }

// //   res.render('login');
// // });

// module.exports = router;