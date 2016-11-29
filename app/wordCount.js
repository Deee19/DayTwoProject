module.exports = {
  words: function (word) {
    var token = word.split(/\s+/);
    console.log(token);
    var result = {};
    var i;

    for (i = 0; i < token.length; i++) {
      if (result[token[i]] > 0) {
        result[token[i]]++;
      } else {
        result[token[i]] = 1;
      }
    }
    return result;
  }
}