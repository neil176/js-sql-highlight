// Highlight the string value for any var 'sql'
// While still highlighting interpolation correctly
const sql = `
  INSERT INTO test
    thing, otherthing, otherother
  VALUES
    ('test', 2, '${String(true) + "inside an interpolated value"}');
    $2
`;

// Highlight the string value for any key 'sql'
const mything = {
  sql: `
    SELECT
    potato
    FROM
    mytable
    WHERE id IN (1, 2, 3);
  `
};

// Should not care about being multiline
function newScopeForMoreSql() {
  const sql = `SELECT something FROM nothing;`;
  const a = function furtherNestedSqlShadowing() {
    const sql = "Not a template string";
  };
}

// Do not affect anything else
const singleLineString = "SELECT not_sql FROM my_table;";
const multiLineString = `
  asdasdas
  asdasdasdasda
  sadasdasdasd;
`;

function testFunc() {
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
  }
  return true;
}

function pickles(testParam = `hey`) {
  return Boolean(testParam);
}

const testObject = {
  prop: testFunc(""),
  someKey: `
    my multiline string
    starts here;
    and ends here;
  `,
  notsql: `
    hmmm
  `
};
