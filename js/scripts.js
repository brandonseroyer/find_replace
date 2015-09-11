var findReplace = function(string, find, replace) {
  var findall = new RegExp(find, "g")
  return string.replace(findall, replace);
};

$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    event.preventDefault()

    var string = $("input#string").val();
    var find = $("input#find").val();
    var replace = $("input#replace").val();
    var result = findReplace(string, find, replace);

    $('#result').text(result);
    event.preventDefault();
  });
});
