import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import theme from '../styles/themes/default';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Innovate - Segurança Eletrônica &amp; TI"
          />
          <meta
            name="description"
            content="Sistema CFTV | Cerca Elétrica | Motor de portão | Alarme | Telecom | Redes lógicas | TI / PB / PE / RN / (83) 2182-4142"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta
            property="og:title"
            content="Innovate - Segurança Eletrônica &amp; TI"
          />
          <meta
            property="og:description"
            content="Sistema CFTV | Cerca Elétrica | Motor de portão | Alarme | Telecom | Redes lógicas | TI / PB / PE / RN / (83) 2182-4142"
          />
          <meta property="og:image" content="/img/logo-display.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta
            property="twitter:title"
            content="Innovate - Segurança Eletrônica &amp; TI"
          />
          <meta
            property="twitter:description"
            content="Sistema CFTV | Cerca Elétrica | Motor de portão | Alarme | Telecom | Redes lógicas | TI / PB / PE / RN / (83) 2182-4142"
          />
          <meta property="twitter:image" content="/img/logo-display.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
