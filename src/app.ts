import { COMPONENTS_REGISTRY } from './renderer/components.registry';

class WGrammApp {
  static render(node: any) {
    const template: string = require('./app.html');

    Object.keys(COMPONENTS_REGISTRY).forEach((selector) => {
      if (template.search(`<${selector}`)) {

      }
    });
    node.innerHTML = template;


  }
}

WGrammApp.render(document.getElementById('root'));
