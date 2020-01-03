import Problems from '../components/problems';
import {ProblemSet, Problem} from '../components/styles';

export default class AdditionBonds extends Problems {
  renderProblem(f, i) {
    let sum = f[0] + f[1];
    return (
      i % 3 == 0 && 
        <ProblemSet key={i}>
        <Problem><span className="factor">{f[0]}</span><span className="op">+</span><span className="factor">{f[1]}</span><span className="equals">=</span></Problem>
        <Problem><span className="factor">{sum}</span><span className="op">-</span><span className="factor">{f[0]}</span><span className="equals">=</span></Problem>
        <Problem><span className="factor">{sum}</span><span className="op">-</span><span className="factor">{f[1]}</span><span className="equals">=</span></Problem>
        </ProblemSet>
    )
  }
}
