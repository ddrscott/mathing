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
      *, *::before, *::after { box-sizing: border-box }

      html, body {
        padding: 0;
        margin: 0;
        height: 100%;
      }

      body {
        height: 100%;
        font-family: Helvetica, Arial, Sans-Serif;
        font-size: 16px;
        background: #EEF2F7;
        text-align: center;
      }

      .factor, .op, .equals {
          display: inline-block;
          min-width: 1.25em;
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
