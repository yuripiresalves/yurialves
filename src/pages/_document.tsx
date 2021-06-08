import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/assets/logo.svg" type="image/svg" />

          {/* SEO */}

          <meta
            name="description"
            content="Desenvolvedor Web Front-end, ReactJS e Next.js."
          />
          <meta name="author" content="Yuri Alves" />
          <meta
            name="keywords"
            content="Yuri Alves - Desenvolvedor Web Front-end, ReactJS e Next.js."
          />

          <link rel="alternate" href="" />
          <meta name="robots" content="index, follow" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta property="og:url" content="https://www.yurialves.dev" />
          <meta property="og:title" content="Yuri Alves" />
          <meta
            property="og:image"
            content="https://www.yurialves.dev/assets/logoya.png"
          />
          <meta
            property="og:description"
            content="Desenvolvedor Web Front-end, ReactJS e Next.js."
          />
          <meta name="theme-color" content="#4E37C4" />

          <meta
            property="business:contact_data:country_name"
            content="Brasil"
          />
          <meta
            property="business:contact_data:website"
            content="https://www.yurialves.dev"
          />
          <meta property="business:contact_data:region" content="PR" />
          <meta
            property="business:contact_data:email"
            content="yuripiresalves@gmail.com"
          />
          {/* <meta property="business:contact_data:phone_number" content="TEL" /> */}

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Desenvolvedor Web Front-end, ReactJS e Next.js."
          />
          <meta name="twitter:title" content="Yuri Alves" />
          <meta
            name="twitter:image"
            content="https://www.yurialves.dev/assets/logoya.png"
          />

          <meta name="geo.placename" content="Paraná" />
          <meta name="geo.region" content="BR" />
          <meta
            name="description"
            content="Desenvolvedor Web Front-end, ReactJS e Next.js."
          />
          <link rel="canonical" href="https://yurialves.dev" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
