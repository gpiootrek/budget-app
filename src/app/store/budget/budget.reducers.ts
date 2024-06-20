import { ActionReducer, createReducer, on } from '@ngrx/store';
import { BudgetState, initialState } from './budget.state';
import { addExpense, deleteExpense } from './budget.actions';

export const budgetReducers: ActionReducer<BudgetState> = createReducer(
  initialState,
  on(addExpense, (state: BudgetState, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
  })),
  on(deleteExpense, (state: BudgetState, { id }) => ({
    ...state,
    expenses: state.expenses.filter((expense) => expense.id !== id),
  }))
);
