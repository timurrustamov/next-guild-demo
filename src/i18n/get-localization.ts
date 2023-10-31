import { cookies } from 'next/headers';
import { cache } from 'react';
import parse from 'html-dom-parser';
import { ReactLocalization } from '@fluent/react/esm/localization';
import { FluentBundle, FluentResource } from '@fluent/bundle';
import enUSLocaleResource from './locales/en-US.ftl';
import frFRLocaleResource from './locales/fr-FR.ftl';
import { Locale } from './locale.enum';

export const getLocalization = cache(() => {
  const locale = (cookies().get('X-Next-Locale')?.value as Locale) || Locale['en-US'];
  let file: string;
  switch (locale) {
    case Locale['en-US']:
      file = enUSLocaleResource;
      break;
    case Locale['fr-FR']:
      file = frFRLocaleResource;
      break;
  }

  const bundle = new FluentBundle(locale);
  const resource = new FluentResource(file);

  bundle.addResource(resource);

  const l10n = new ReactLocalization([bundle], (str): any => {
    const nodes = parse(str);
    return nodes.map((node: any) => {
      if (node.type === 'text') {
        return { nodeName: '#text', type: 'text', textContent: node.data };
      }
      return { nodeName: node.name, type: 'tag', textContent: node.children?.[0]?.data };
    });
  });

  return { l10n, locale };
});
