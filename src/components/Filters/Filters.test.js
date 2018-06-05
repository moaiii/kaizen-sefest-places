import reducer from "./Filters.reducer";
import * as actions from "./Filters.action";

describe("Filters", () => {
  it("should set filter category selection", () => {
    expect(reducer({}, actions.setSelection('category', 'crime')))
      .toHaveProperty('category', 'crime')
  })
  
  it("should set filter subcategory selection", () => {
    expect(reducer({}, actions.setSelection('subcategory', 'burgulary')))
      .toHaveProperty('subCategory', 'burgulary')
  })
  
  it("should set filter location", () => {
    expect(reducer({}, actions.setSelection('location', 'london')))
      .toHaveProperty('location', 'london')
  })
});