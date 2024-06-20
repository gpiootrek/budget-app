import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'expenses',
        loadComponent: () =>
          import('../expenses/expenses.page').then((m) => m.ExpensesPage),
      },
      {
        path: 'income',
        loadComponent: () =>
          import('../income/income.page').then((m) => m.IncomePage),
      },
      {
        path: 'analysis',
        loadComponent: () =>
          import('../analysis/analysis.page').then((m) => m.AnalysisPage),
      },
      {
        path: '',
        redirectTo: '/tabs/expenses',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/expenses',
    pathMatch: 'full',
  },
];
