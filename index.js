class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^- '\w]/g, "");
  }

  static titleize(string) {
    let upper = string.replace(/(\b[a-z])/g, c => c.toUpperCase());
    console.log(upper)
    let andDown = upper.replace(
      /((The|And|From|But|An|Of|A|For|At|By)((?=,)|(?= )))/g,
      c => c.charAt(0).toLowerCase() + c.substring(1)
      );
    return (andDown.charAt(0).toUpperCase() + andDown.substring(1));
  }
}

Formatter.titleize("a Tale of Two Cities");
