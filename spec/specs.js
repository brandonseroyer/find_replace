describe('findReplace', function() {
  it("will find and replace a word in a string", function() {
    expect(findReplace("Brandon is cool","Brandon", "Nicole")).to.equal("Nicole is cool");
  });
});
