const bodyParser = require('body-parser');
const { Router } = require('express');

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


module.exports = router;