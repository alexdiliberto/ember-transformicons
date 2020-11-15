interface TemplateFactory {
  __htmlbars_inline_precompile_template_factory: any;
}

export function hbs(template: TemplateStringsArray, ...args: any[]): TemplateFactory;
