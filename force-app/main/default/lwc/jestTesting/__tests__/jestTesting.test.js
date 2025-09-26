import { createElement } from "@lwc/engine-dom";

// import your component and apex methods to test
import JestTesting from "c/jestTesting";
import getAccounts from "@salesforce/apex/AccountListController.getAccounts";

let componentElement;
beforeEach(() => {
  // Arrange and Act
  componentElement = document.body.appendChild(
    createElement("c-jest-testing", {
      is: JestTesting
    })
  );
});

describe("Element and Event Tests", () => {
  it("Should render lightning card", async () => {
    expect(
      componentElement.shadowRoot.querySelector("lightning-card.MyCard")
    ).not.toBeNull();
    expect(
      componentElement.shadowRoot.querySelector("lightning-card.MyCard")?.title
    ).toBe("Jest Test Component");
  });

  it("Should render content when button is clicked", async () => {
    expect(componentElement.shadowRoot.querySelector(".content")).toBeNull();

    componentElement.shadowRoot
      .querySelector("lightning-button.ShowContentButton")
      ?.dispatchEvent(new CustomEvent("click"));
    await Promise.resolve();

    expect(
      componentElement.shadowRoot.querySelector(".content")?.textContent
    ).toBe("This is a simple content for Jest testing purposes.");
  });
});

// Mock Apex wire adapter
jest.mock(
  "@salesforce/apex/AccountListController.getAccounts",
  () => {
    const { createApexTestWireAdapter } = require("@salesforce/sfdx-lwc-jest");
    return {
      default: createApexTestWireAdapter(jest.fn())
    };
  },
  { virtual: true }
);
describe("Wire Tests", () => {
  const mockGetAccounts = require("./data/getAccountList.json");
  const mockGetAccountsNoRecords = require("./data/getAccountListNoRecords.json");

  it("Should render list of accounts when data is returned", async () => {
    // Emit data from @wire
    getAccounts.emit(mockGetAccounts);
    await Promise.resolve();
    expect(
      componentElement.shadowRoot.querySelectorAll("p.account").length
    ).toBe(mockGetAccounts.length);
  });

  it("Should render no records found message when no data is returned", async () => {
    // Emit data from @wire
    getAccounts.emit(mockGetAccountsNoRecords);
    await Promise.resolve();
    expect(componentElement.shadowRoot.querySelector("p.account")).toBeNull();
  });

  it("Should render error panel when error is returned", async () => {
    // Emit error from @wire
    getAccounts.error();
    await Promise.resolve();

    expect(componentElement.shadowRoot.querySelector("p.account")).toBeNull();
    expect(
      componentElement.shadowRoot.querySelector("p.error").textContent
    ).toBe("Error loading accounts");
  });
});

afterEach(() => {
  // The jsdom instance is shared across test cases in a single file so reset the DOM
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  jest.resetAllMocks();
});
