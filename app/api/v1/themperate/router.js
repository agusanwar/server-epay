const express = require('express');
const router = express();
const {index ,create, find} = require('./controller');



router.get('/themperate', index);
router.get('/themperate/:id', find);
router.post('/themperate', create);

module.exports = router;