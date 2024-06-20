import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { AddFormModalType } from 'src/app/types';
import { Expense, ExpenseCategory } from 'src/app/types';
import { Income, IncomeCategory } from 'src/app/types';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonDatetime,
    IonGrid,
    IonHeader,
    IonInput,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    TitleCasePipe,
  ],
})
export class AddFormComponent {
  public title: string = '';
  public date: string = new Date().toISOString();
  public amount: number = 0;
  public category: ExpenseCategory | IncomeCategory =
    ExpenseCategory.OTHER;
  public readonly type: AddFormModalType = AddFormModalType.EXPENSE;
  public readonly CATEGORIES =
    this.type === AddFormModalType.EXPENSE
      ? Object.keys(ExpenseCategory)
      : Object.keys(IncomeCategory);

  constructor(private modalCtrl: ModalController) {}

  public cancel(): void {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  public add(): void {
    switch (this.type) {
      case AddFormModalType.EXPENSE:
        this._addExpense();
        break;
      case AddFormModalType.INCOME:
        this._addIncome();
        break;
      default:
        break;
    }
  }

  private _addExpense(): void {
    const expense: Expense = {
      title: this.title,
      amount: this.amount,
      date: new Date(this.date),
      id: new Date().getTime().toString(),
      category: this.category as ExpenseCategory,
    };

    this.modalCtrl.dismiss(expense, 'confirm');
  }

  private _addIncome(): void {
    const income: Income = {
      title: this.title,
      amount: this.amount,
      date: new Date(this.date),
      id: new Date().getTime().toString(),
      category: this.category as IncomeCategory,
    };

    this.modalCtrl.dismiss(income, 'confirm');
  }
}
