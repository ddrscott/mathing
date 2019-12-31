import Head from 'next/head';
import AdditionBonds from '../components/addition_bonds';
import Layout from '../layouts/main';
import styled from 'styled-components';
import Link from 'next/link'


const TYPES = {
  addition_bonds: AdditionBonds
}

function App({query}) {

    let {seed, min, max, count, type} = query;

    seed = seed ? parseInt(seed) : 1;
    min = min ? parseInt(min) : 1;
    max = max ? parseInt(max) : 9;
    count = count ? parseInt(count) : 20;
    type = type || 'addition_bonds';


    const ComponentType = TYPES[type],
          title = type.split('_').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');


    return (
      <Layout>
        <a role="navigation" aria-label="Previous Sheet" href={`/?seed=${seed - 1}`} className="button no-print" style={{float:'left'}} title="Prev">Previous</a>
        <a role="navigation" aria-label="Next Sheet" href={`/?seed=${seed + 1}`} className="button no-print" style={{float:'right'}} title="Next">Next</a>
        <h1>{title}</h1>
        <div className="columns">
          <ComponentType min={min} max={max} seed={seed} count={count} />
        </div>
        <style jsx>{`
        h1 {
          text-align: center;
          font-style: sans-serif;
        }
        .columns {
          text-align: center;
          font-family: monospace;
          font-size: 24px;
          columns: 8em auto;
          line-height: 2.75;
        }
        .button {
          padding: 1em;
        }
        @media print
        {    
          h1 {
            margin: 0;
            padding: 0 0 1em;
          }
          body {
          }

          .columns {
             font-size: 20px;
             columns: auto 4;
          }
        }

        `}</style>
      </Layout>
    )
}

App.getInitialProps = ({res, query}) => {
  if (!query.seed && res) {
    console.log(query);
    let d = new Date();
    res.writeHead(302, {
      Location: '/?seed=' + d.getFullYear() + (d.getMonth() + 1) + d.getDate()
    })
    res.end()
  }
  return {query}
}

export default App;
