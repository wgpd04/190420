let ejs = require('ejs'),
    peopleData = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(" | ") %> <br> count: <%= count %>  ', {people: peopleData, count: 3});
    
console.log(html);
