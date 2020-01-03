import Problems from '../components/problems';
import {ProblemSet, Problem} from '../components/styles';

export default class Subtraction extends Problems {
  renderProblem(f, i) {
    return (
      <ProblemSet key={i}>
      <Problem><span className="factor">{f[0]}</span><span className="op">-</span><span className="factor">{f[1]}</span><span className="equals">=</span></Problem>
      </ProblemSet>
    )
  }
}
