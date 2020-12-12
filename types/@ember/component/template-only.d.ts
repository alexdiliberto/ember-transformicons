declare module '@ember/component/template-only' {
  // TODO: remove when this actually exists
  // tslint:disable-next-line:no-empty-interface
  export interface TemplateOnlyComponent extends _TemplateOnlyComponent {}
  export default function templateOnly(moduleName?: string): TemplateOnlyComponent;
}