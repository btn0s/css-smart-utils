const fs = require('fs');

const regex = /(?:class=(?:"|')([a-zA-Z0-9]{1,}))/g;

fs.readFile('./src/html/index.html', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var match = regex.exec(data);
    console.log(match[1]);


});

/*

1. Grab first class on element.
2. Store as selector.
3. Grab rest of classes on element.
4. Store in Array.
5. For each in Array.
6. Parse CSS and extract rules from that selector.
7. Store rules in String.
8. Construct String from Selector and Rules.
9. Write to CSS file.

 */

