class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let words = string.split(' ');
    let processed = [];
    let lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    processed.push(words[0][0].toUpperCase() + words[0].slice(1));

    for(let i = 1;i < words.length; i++) {
      let word = words[i];
      if(lowerCaseWords.includes(word)) {
        processed.push(word);
      } else {
        processed.push(word[0].toUpperCase() + word.slice(1));
      }
    }

    return processed.join(' ');
  }
}