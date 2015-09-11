var findReplace = function(string, find, replace) {
  var findall = new RegExp(find, "g")
  return string.replace(findall, replace);

};
