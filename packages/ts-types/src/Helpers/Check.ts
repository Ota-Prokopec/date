export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

export type TypeCheck<TOne extends unknown, TTwo extends TOne> =
  Equal<TOne, TTwo> extends true ? 'Success - two type equal' : 'Error - two type do not equal'
