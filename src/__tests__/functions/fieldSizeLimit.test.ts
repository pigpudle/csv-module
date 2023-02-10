import { expect } from "chai";
import { fieldSizeLimit } from "../../functions/fieldSizeLimit";
 
// TODO: implement tests
describe("test fieldSizeLimit", () => {
  describe("test getter", () => {
    it("should return default value of 131072", () => {
      const result = fieldSizeLimit();
      expect(result).to.equal(131072)
    });
  })
  describe("test setter", () => {})
});