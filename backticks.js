// backtick strings (a.k.a. template literals)
//    same as old strings except new lines are okay and you can use ${}

// var html = "<h1 data-id=" + song.id + ">" + song.name + "</h1>" + "<audio src=" + song.source + "></audio>";
// $('.container').append(html);

// --------------------------------------------------------

var song = {
  id: 9999,
  name: 'Yellow Submarine',
  source: 'http://example.com/submarine.mp3'
};

var html = `
  <h1 data-id="${song.id}">
    ${song.name}
  </h1>
  <audio src="${song.source}"></audio>
`;
// $('.container').append(html);

console.log(html);
