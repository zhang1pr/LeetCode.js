const fs = require('fs');
const process = require('process')

function runInBrowserConsole() {
  var table = $$('.reactable-data tr');
  var string = '\"';

  for (const tr of table) {
    var td = tr.querySelectorAll('td');
    var number = td[1].innerText;
    while (number.length < 3) {
      number = '0' + number;
    }

    var name = td[2].innerText.trim().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
    var title = '(' + number + ')' + name;
    string += title + '|';
  }

  string = string.slice(0, -1) + '\"';
  console.log(string);
}

const problems = process.argv[2].split('|');
const count = parseInt(problems[0].slice(1, 4), 10);
const folderCount = Math.floor(count/100);
const folderName = `${folderCount * 100 + 1}-${(folderCount + 1) * 100}`;
const path = `./${folderName}`;

if (!fs.existsSync(path)) {
  fs.mkdir(path, () => {});
}

process.chdir(path, () => {});

for (const problem of problems) {
  if (!fs.existsSync(problem + '.js')) {
    fs.writeFile(problem + '.js', '', () => {});
  }
}
