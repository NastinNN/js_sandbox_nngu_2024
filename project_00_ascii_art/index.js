// console.log('Hello, Project 00');
const art = require('ascii-art');

art.font("PewPew", "DOOM", (err, rendered) => {
  if (err) return;
  console.log (rendered);
});