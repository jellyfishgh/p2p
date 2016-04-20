var router = require('koa-router')();

router.get('/', generator);
router.get('index', generator);

function* generator(next) {
    yield this.render('index', {
        title: 'Hello World Koa',
        marks: JSON.parse('{"name":"Jellyfish"}')
    });
}

module.exports = router;
