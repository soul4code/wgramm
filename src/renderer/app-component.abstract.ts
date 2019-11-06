

export abstract class AppComponent<T> extends HTMLElement {

  props: T;

  constructor(props: T) {
    super();
    this.props = props;
  }

  abstract render(): string;

}