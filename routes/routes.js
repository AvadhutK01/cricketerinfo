const express = require('express');
const router = express.Router();
const datacontroller = require('../controllers/datacontroller');

router.get('/', datacontroller.getIndex);

router.post('/post-data', datacontroller.postData);

router.get("/get-search/:cricketername", datacontroller.getData);

router.post('/update-data/:id', datacontroller.updateData);

router.post('/delete-data', datacontroller.deleteData);
module.exports = router;
