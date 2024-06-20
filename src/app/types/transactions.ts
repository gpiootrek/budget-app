

export interface Transaction<CategoryType> {
  id: string;
  title: string;
  amount: number;
  date: Date;
  category: CategoryType;
}

export interface Income extends Transaction<IncomeCategory>{
}

export interface Expense extends Transaction<ExpenseCategory> {
}

export enum IncomeCategory {
  SALARY,
  OTHER,
}

export enum ExpenseCategory {
  RENT = 'RENT',
  SUBSCRIPTIONS = 'SUBSCRIPTIONS',
  FOOD = 'FOOD',
  HOUSING = 'HOUSING',
  OUT = 'OUT',
  OTHER = 'OTHER',
  BOOKS = 'BOOKS',
  BEAUTY = 'BEAUTY',
  SPORT = 'SPORT',
  CLOTHES = 'CLOTHES',
  HEALTH = 'HEALTH',
  TRAVEL = 'TRAVEL',
  TRANSPORT = 'TRANSPORT',
  LEARNING = 'LEARNING',
  TECH = 'TECH',
}
