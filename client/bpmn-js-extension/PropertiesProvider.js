/**
 * A bpmn-js plugin which extends the existing Camunda Properties Provider
 * by removing one tab.
 *
 */
export default class PropertiesProvider {

  constructor(propertiesPanel) {
    propertiesPanel.registerProvider(500, this);

  }

  getTabs(element) {
    return function(tabs) {
      
      // remove Input/Output tab
      const idx = tabs.findIndex(t => t.id === 'input-output');

      tabs.splice(idx, 1);

      return tabs;
    }
  }
}

PropertiesProvider.$inject = [
  'propertiesPanel'
];