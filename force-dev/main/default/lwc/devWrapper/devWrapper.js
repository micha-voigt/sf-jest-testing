import { LightningElement /*wire, api*/ } from "lwc";
import { NavigationMixin } from "lightning/navigation";
// import { CurrentPageReference } from "lightning/navigation";

export default class DevWrapper extends NavigationMixin(LightningElement) {
  // @api propertyValue;
  // @wire(CurrentPageReference) currentPageRef;

  // get propertyValue() {
  //     return this.currentPageRef.state.c__propertyValue;
  // }

  handleNavigateToDev() {
    console.log(`navigate to dev`);
    this[NavigationMixin.Navigate]({
      type: "standard__component",
      attributes: {
        componentName: "c__sampleComponent"
      },
      state: {
        c__recordId: "0019M00000o11JrQAI"
      }
    });
  }
}
