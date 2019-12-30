import Random from '../components/random';

export default class Problems extends React.Component {
  constructor(props) {
    super(props);
    let {seed, min, max, count} = props

    let random = new Random(seed);

    this.state = {
      random: random,
      data: random.int(min, max),
      factors: [...Array(count)].map(_ => {
        let a = [random.int(min, max), random.int(min, max)];
        a.sort();
        a.reverse();
        return a;
      })
    };
  }

  render() {
    let {max, seed} = this.props;

    return (
      <div>
        { this.state.factors.map((f,i) => this.renderProblem(f,i)) }
      </div>
    )
  }
}
