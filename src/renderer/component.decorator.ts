import { COMPONENTS_REGISTRY } from './components.registry';


function componentDecorator(componentParams: {selector: string, templateUrl: string}) {

  return function (target: any) {
    COMPONENTS_REGISTRY[componentParams.selector] = target;
    console.log(target);
    customElements.define(componentParams.selector, class extends target {
      connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = this.render();
      }
    });
    return target;
  }
}

export {componentDecorator as Component};