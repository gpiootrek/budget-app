import { createAction, props } from '@ngrx/store';
import { Expense } from 'src/app/types';

export const expensesKey = '[Expenses]';

export const addExpense = createAction(
  `${expensesKey} Add Expense`,
  props<{ expense: Expense }>()
);

export const deleteExpense = createAction(
  `${expensesKey} Delete Expense`,
  props<{ id: string }>()
);
