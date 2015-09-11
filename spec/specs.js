describe('findReplace', function() {
  it("will find and replace a word in a string with another user specified word", function() {
    expect(findReplace("Brandon is cool","Brandon", "Jimmy")).to.equal("Jimmy is cool");
  });

  it("will find and replace all instances of a word in a string with another user specified word", function() {
    expect(findReplace("Brandon is cool because his name is Brandon","Brandon","Jimmy")).to.equal("Jimmy is cool because his name is Jimmy");
  });

});
