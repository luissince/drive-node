const router = require('express').Router();
const fs = require('fs');
const slash = process.platform === 'win32' ? '\\' : '/';

router.get('/', async (req, res, next) => {
      try {
            const concat = req.query.path == undefined ? '' : slash;
            const path = `${req.query.absolutePath}${concat}${req.query.name}`;
            let stats = fs.statSync(path);
            if (stats.isFile()) {
                  try {
                        await fs.unlinkSync(path);
                        res.json({ "state": true, message: "file deleted successfully." });
                  } catch (err) {
                        res.json({ "state": false, message: "error deleting file3." });
                  }
            } else {
                  res.json({ "state": false, message: "error deleting file2." });
            }
      } catch (err) {
            res.json({ "state": false, message: "error deleting file1." });
      }
});

module.exports = router;