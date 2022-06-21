const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
// const authGuard = require('../_middleware/auth.guard');
const validate = require('../utils/validator'); 

// router.post('/register', validate('register'),  authController.register);
router.post('/login',     authController.login);
// router.get('/user',      authGuard,             authController.getUser);
// router.get('/logout',    authGuard,             authController.logout);

router.all('*',  (req, res) => res.status(400).json({'error': 'Bad Request.'}))

module.exports = router;