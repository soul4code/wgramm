import { Component } from '../../renderer/component.decorator';
import { AppComponent } from '../../renderer/app-component.abstract';

const TextInputTemplate = require('./text-input.component.html');

@Component({
  selector: 'wtgm-text-input',
  templateUrl: './text-input.component.html'
})
class TextInputComponent extends AppComponent<{title: string}> {

  render(): string {
    return TextInputTemplate
  }
}