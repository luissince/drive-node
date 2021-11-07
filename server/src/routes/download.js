const router = require('express').Router();
const mime = require('mime-types');
const processPath = require('../lib/path');
const slash = process.platform === 'win32' ? '\\' : '/';

router.get('/', (req, res, next) => {  
    const file = processPath(req.query.path).absolutePath;
    const concat = req.query.path == undefined ? '' : slash;
    const path = `${file}${concat}${req.query.name}`;
    return res.download(`${path}`,(error)=>{
      if(error){
        res.status(500).json({
          status: false,
          message: "Could not download the file. " + error
        });
      }
    });
});

module.exports = router;
