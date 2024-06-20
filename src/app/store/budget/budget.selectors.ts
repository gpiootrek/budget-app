import { BudgetState } from './budget.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBudgetFeature = createFeatureSelector<BudgetState>('budget');

export const selectExpenses = createSelector(
  selectBudgetFeature,
  ({ expenses }: BudgetState) => expenses
);

export const selectIncome = createSelector(
  selectBudgetFeature,
  ({ income }: BudgetState) => income
);
