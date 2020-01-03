import Head from 'next/head';
import AdditionBonds from '../components/addition_bonds';
import Addition from '../components/addition';
import Subtraction from '../components/subtraction';
import Layout from '../layouts/main';
import styled from 'styled-components';
import Link from 'next/link'


const TYPES = {
  addition_bonds: AdditionBonds,
  addition: Addition,
  subtraction: Subtraction
}

function App({query}) {

    let {seed, min, max, count, type} = query;

    seed = seed ? parseInt(seed) : 1;
    min = min ? parseInt(min) : 1;
    max = max ? parseInt(max) : 9;
    count = count ? parseInt(count) : 60;
    type = type || 'addition_bonds';


    const ComponentType = TYPES[type],
          title = type.split('_').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '),
          base_query = `/?type=${type}&min=${min}&max=${max}&count=${count}`

    return (
      <Layout>
        <div className="page">
          <nav className="no-print">
          <a role="navigation" aria-label="Previous Sheet" href={`${base_query}&seed=${seed - 10000}`} className="button no-print" style={{float:'left'}} title="Prev">Previous</a>
          <a role="navigation" aria-label="Next Sheet" href={`${base_query}&seed=${seed + 10000}`} className="button no-print" style={{float:'right'}} title="Next">Next</a>
          </nav>
          <h1>{title}</h1>
          <p className="no-print" style={{clear: 'both'}}>Print it out for your kids. NOW!</p>
          <div className="columns">
            <ComponentType min={min} max={max} seed={seed} count={count} />
          </div>
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
          columns: 7em auto;
          line-height: 2.75;
        }
        .button {
          padding: 1em;
        }

        @media screen {
          .page {
            box-shadow:
              0 2.8px 2.2px rgba(0, 0, 0, 0.034),
              0 6.7px 5.3px rgba(0, 0, 0, 0.048),
              0 12.5px 10px rgba(0, 0, 0, 0.06),
              0 22.3px 17.9px rgba(0, 0, 0, 0.072),
              0 41.8px 33.4px rgba(0, 0, 0, 0.086),
              0 100px 80px rgba(0, 0, 0, 0.12);

            margin: 5%;
            border-radius: 2px;
          }
        }

        @media print
        {    
          h1 {
            margin: 0;
            padding: 0 0 1em;
          }
          body {
            background: white;
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
      Location: '/?seed=' + (d.getFullYear() * 1000 + (d.getMonth() + 1) * 100 + d.getDate())
    })
    res.end()
  }
  return {query}
}

export default App;
