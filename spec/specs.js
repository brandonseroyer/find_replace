describe('findReplace', function() {
  it("will find and replace a word in a string with another user specified word", function() {
    expect(findReplace("Brandon is cool","Brandon", "Nicole")).to.equal("Nicole is cool");
  });

  it("will find and replace all instances of a word in a string with another user specified word", function() {
    expect(findReplace("Brandon is cool because his name is Brandon","Brandon", "Nicole")).to.equal("Nicole is cool because her name is Nicole");
  });

});
