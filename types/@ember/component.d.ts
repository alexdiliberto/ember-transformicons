import type { TemplateFactory } from 'ember-cli-htmlbars';

declare module '@ember/component' {
  // TODO: remove when this actually exists
  export function setComponentTemplate(template: TemplateFactory, klass: any): any;
}
