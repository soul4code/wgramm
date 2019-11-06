


export function App<T extends {new(...args: any[]): {}}>(appParams: {components: any[]}) {

  appParams.components.forEach((component) => {

  });

  return function (target: T) {
    return class extends target {}
  }


}