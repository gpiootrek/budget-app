import { Budget, Expense, Income } from 'src/app/types';

export interface BudgetState extends Budget {
  loading: [];
  expenses: Expense[];
  income: Income[];
  initialBalance: number;
}

export const initialState: BudgetState = {
  loading: [],
  expenses: [],
  income: [],
  initialBalance: 0,
};
