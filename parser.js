const fs = require('fs');
const process = require('process');

function runInBrowserConsoleOnLeetCodeProblemSetPage() {
  var elements = $$('.w-full.flex-1');
  var table = elements[elements.length - 1];

  var arr = [...table.querySelectorAll('a')].slice(1); // skip daily question
  var string = '\"';

  for (const aTag of arr) {
    var row = aTag.querySelector('.ellipsis.line-clamp-1');
    var res = row.innerText;
    
    var [number, name] = res.split('. ');
    number = number.padStart(3, 0);

      
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

process.chdir(path, () => {}); // run twice if there's no directory error

for (const problem of problems) {
  if (!fs.existsSync(problem + '.js')) {
    fs.writeFile(problem + '.js', '', () => {});
  }
}
