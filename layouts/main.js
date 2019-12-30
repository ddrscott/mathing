import Head from 'next/head'
export default ({children}) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
    </Head>
    { children }

    <style jsx global>{`
      html, body {
        padding: 0;
        margin: 0;
      }
      body {
        height: calc(100vh - 2em);
        font-family: Helvetica, Arial, Sans-Serif;
        font-size: 16px;
      }
      @media print
      {    
          .no-print, .no-print *
          {
              display: none !important;
          }
      }
    `}</style>
  </div>
)
