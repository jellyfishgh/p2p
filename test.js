var fs = require('fs');

var jsonStr = fs.readFileSync('./public/bookmarks.json', "utf-8");
var marks = JSON.parse(jsonStr);
console.log(marks);


// http://knowthen.com/category/node-js/

// https://github.com/koajs/workshop