// Make sure default strings are not broken
const defaultString2 = `--test
String;`;
const defaultString3 = `
  If the first line is a string, it will be intepritied as a comment
  sdfsdfdsfsdf
  asdaskjdlasjdlkasjdas
  dasdajslkdjaslkdjalskdjasd
  asdaslkdjaksldasdasdasdas;
`;

const defaultString4 = `
  nothing to highlight;
`;

const value = `Nothing can be here;`;
const value2 = `<div>Something</div>`;

const defaultString4 = `
  asdasdas
  asdasdasdasdajsdlasdjklasjdlajsdlasjdlasjdlasjdlasjldajsldkjasldkajsldakjsdl
  <div attribute attribute="value" lastattr>asdasd</div>
  sadasdasdasd
  asdasdas
  asdasdasda
  sdasdasdasdasdasd
  asdasdasdasdasdasda
  sdasdasdasdsadasdasdasd
  asdasdasdasdasdlkjasldjalskdjalskdjalsdjalksdjalskdj
`;

// Check single-line HTML highlighting
const singleLine = `<div>${div}Something</div>`;

function test() {
  return true;
}

const singleLineObj = {
  prop: test(""),
  noHTML: `nohtml`
};
test(`hey`, `1`);
callFn("arg", `<div attr="asdasd">Value</div>`);
const test = "thing";

const multilineObj = {
  prop: `
        <div att="adsasd"> ${test("potato")}</div>
`,
  asd: "sadasdasd"
};

// Check functions
const checkFn = temp(`<div attr="value">Message</div>`);

// Misc
function test() {
  const result = true;
  return result;
}

const stress1 = `asdasdasd`;
const stress2 = `<no>asd<div attr="asdad"></div>adasd</no>`;
const stress3 = `<no> ${test("asdasd")} </no>`;

function test() {
  const result = true;
  return result;
}

const testSQL = /* sql */ `
    -- THIS FILE SHOWS EXAMPLE SYNTAX HIGHLIGHTING
    -- FOR SQL
    INSERT INTO database.table (1, 2, 3) VALUES (1, 2, 3);
    CREATE TABLE mytable;
    DELETE FROM mytable WHERE id = 2
`;

const othrtestsql = `
    -- THIS FILE SHOWS EXAMPLE SYNTAX HIGHLIGHTING
    -- FOR SQL
    INSERT INTO database.table (1, 2, 3) VALUES (1, 2, 3);
    CREATE TABLE mytable;
    DELETE FROM mytable WHERE id = 2
`;

const mything = {
  sql: `
    SELECT
    potato
    FROM
    mytable
    WHERE id IN (1, 2, 3);ß
`
};

const sql = `
  INSERT INTO test
    thing, otherthing
  VALUES
    ('test', 2);
    limit ${thing}
    $2
`;

function imapickle(test = `hey`) {
  return Boolean(test);
}

/*
        {
          "name": "string.quoted.template.js",
          "match": "^\\s*([^\\<]*)\\s*$"
        },
        
 {
  "fileTypes": [
    "js",
    "jsx",
    "ts",
    "tsx",
    "html"
  ],
  "injectionSelector": "L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string",
  "injections": {
    "L:source": {
      "patterns": [
        {
          "match": "<",
          "name": "invalid.illegal.bad-angle-bracket.html"
        }
      ]
    }
  },
  "patterns": [
    {
      "comment": "Single line strings",
      "begin": "(\\=|\\:|\\,|\\>)\\s*(`)$",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.assignment.js"
        },
        "2": {
          "name": "string.quoted.template.js"
        }
      },
      "end": "\\s*(`)($)",
      "endCaptures": {
        "1": {
          "name": "string.quoted.template.js"
        }
      },
      "patterns": [
        {
          "comment": "It's matches only tags but not anything inside",
          "begin": "(<\/?)\\!?(\\w[^\\s>]*)(?<!/)",
          "end": "((?: ?/)?>)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.tag.begin.html"
            },
            "2": {
              "name": "entity.name.tag.html"
            }
          },
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.tag.end.html"
            }
          },
          "patterns": [
            {
              "include": "text.html.basic#attribute"
            }
          ]
        }
      ]
    }
  ],
  "scopeName": "inline.es6-html"
}
*/
