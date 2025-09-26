import { wire } from "lwc";
import { LightningElement } from "lwc";
import getAccounts from "@salesforce/apex/AccountListController.getAccounts";

export default class JestTesting extends LightningElement {
  headerContent = "Jest Test Testing Component";
  content = "This is a simple content for Jest testing purposes.";
  showContent = false;

  accounts;
  error;
  @wire(getAccounts, { limitSize: 5 })
  wiredAccounts({ error, data }) {
    if (data) {
      this.accounts = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.accounts = undefined;
    }
  }

  handleShowContent() {
    this.showContent = true;
  }

  handleShowIteration() {
    this.showIteration = true;
  }
}
