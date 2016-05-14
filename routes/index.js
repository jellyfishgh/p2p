var router = require('koa-router')();

var fs = require('fs');
var thunkify = require('thunkify');

var read = thunkify(fs.readFile);

router.get('/', generator);
router.get('index', generator);

function* generator(next) {
    yield this.render('index', {
        "title": 'Hello World Koa',
        "marksStr": yield read('./public/bookmarks.json', "utf-8")
    });
}

module.exports = router;