import type { TemplateFactory } from 'ember-cli-htmlbars';

declare module '@ember/component' {
  // TODO: remove when this actually exists
  //    https://github.com/typed-ember/ember-cli-typescript/issues/1141
  //    https://github.com/DefinitelyTyped/DefinitelyTyped/pull/45285
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function setComponentTemplate(template: TemplateFactory, klass: any): any;
}
