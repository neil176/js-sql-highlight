Forked from https://github.com/mydesireiscoma/es6-string-html but significantly changed to support the following behavior:

- All consideration for html removed. This extension is just for highlighting sql in js
- no flags or comments are required.
- Any variable `sql` assigned a template string value should apply sql syntax highlighting to that value

```js
const sql = `
  INSERT INTO test
    thing, otherthing, otherother
  VALUES
    ('test', 2, '${String(true) + "inside an interpolated value"}');
    $2
`;
```

- Any object key `sql` assigned a template string value should apply sql syntax highlighting to that value

```js
const mything = {
  sql: `
    SELECT
    potato
    FROM
    mytable
    WHERE id IN (1, 2, 3);
  `
};
```

### Would be nice to have:

- Settings-defined var/key names on which to highlight
