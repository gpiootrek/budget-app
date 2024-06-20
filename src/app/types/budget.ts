import { Expense, Income } from './transactions';

export interface Budget {
  expenses: Array<Expense>;
  income: Array<Income>;
  initialBalance: number;
}
