import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { Expense, ExpenseCategory, Income } from 'src/app/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    TitleCasePipe,
  ],
})
export class CardComponent {
  transaction = input.required<Income | Expense>();
  
  get isExpense(): boolean {
    return this.transaction().category in ExpenseCategory;
  }
}
