// console.log('Hello, Project 00');
const art = require('ascii-art');

art.font("PewPewPew", "DOOM", (err, rendered) => {
  if (err) return;
  console.log (rendered);
});