const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('from loan');
});


module.exports = router;