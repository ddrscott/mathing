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
          margin: 0 0em;
          text-align: center;
          font-family: monospace;
          font-size: 20px;
          height: calc(100% - 1em);
          columns: auto 4;
          line-height: 2.75;
        }
        `}</style>
      </Layout>
    )
}

App.getInitialProps = ({query}) => {
  return {query}
}

export default App;
