import { SUPPORTED_LANGUAGE_CODES } from '@documenso/lib/constants/locales';
import { defineConfig } from '@eloqnt/cli';

export default defineConfig({
  messages: {
    path: 'packages/lib/translations/{locale}/web',
    locales: [...SUPPORTED_LANGUAGE_CODES],
    sourceLocale: 'en',
    format: 'po',
  },
});
