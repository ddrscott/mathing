import Problems from '../components/problems';
import {ProblemSet, Problem} from '../components/styles';

export default class AdditionBonds extends Problems {
  renderProblem(f, i) {
    let sum = f[0] + f[1];
    return (
      <ProblemSet key={i}>
        <Problem> {f[0]} + {f[1]} = </Problem>
        <Problem> {sum} - {f[1]} = </Problem>
        <Problem> {sum} - {f[0]} = </Problem>
      </ProblemSet>
    )
  }
}
