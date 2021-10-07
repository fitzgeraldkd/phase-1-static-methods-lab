class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replaceAll(/[^A-Z0-9 '-]/gi, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return str.split(' ').map((word, index) => {
      if (exceptions.includes(word) && index !== 0) {
        return word;
      } else {
        return Formatter.capitalize(word);
      }
    }).join(' ');
  }
}