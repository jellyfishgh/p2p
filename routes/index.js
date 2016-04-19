var router = require('koa-router')();
var fs = require('fs');

router.get('/', generator);
router.get('index', generator);

function* generator(next) {
    var jsonStr = fs.readFileSync('../public/bookmarks.json', "utf-8");
    console.log(jsonStr);
    var marks = JSON.parse(jsonStr);
    console.log(marks);
    yield this.render('index', {
        title: 'Hello World Koa!'
        // marks: marks
    });
}

module.exports = router;
