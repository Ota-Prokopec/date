export type Equal<TOne extends unknown, TTwo extends TOne> = TOne extends TTwo
  ? 'Success - two type equal'
  : 'Error - two type do not equal'
