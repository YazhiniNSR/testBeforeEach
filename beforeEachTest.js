"use strict";

describe("A new block", function() 
{
  beforeEach (function()
  {
      throw new Error('Error in beforeEach');
  });
  it("First test", function()
  {
      console.log ("Executed first it block");
  });
  it("Second test" , function ()
  {
      console.log ("Executed second it block");
   });
});
