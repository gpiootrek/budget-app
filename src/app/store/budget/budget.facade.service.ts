import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BudgetActions from './budget.actions';
import { BudgetState } from './budget.state';
import { Expense, Income } from 'src/app/types';
import { selectExpenses, selectIncome } from './budget.selectors';

@Injectable({
  providedIn: 'root',
})
export class BudgetFacadeService {
  public income$: Observable<Income[]>;
  public expenses$: Observable<Expense[]>;

  constructor(private store: Store<BudgetState>) {
    this.expenses$ = this.store.select(selectExpenses);
    this.income$ = this.store.select(selectIncome);
  }

  public addExpense(expense: Expense): void {
    this.store.dispatch(BudgetActions.addExpense({ expense }));
  }

  public deleteExpense(id: string): void {
    this.store.dispatch(BudgetActions.deleteExpense({ id }));
  }
}
