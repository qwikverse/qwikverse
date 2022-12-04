import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/core/RouterHead';

import globalStyles from "~/assets/styles/global.css?inline";
import interFontStyles from "@fontsource/inter/variable.css?inline";

export default component$(() => {
  useStyles$(globalStyles);
  useStyles$(interFontStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-slate-900 antialiased">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
