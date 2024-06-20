import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  ModalController,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AddFormComponent } from '../shared/components/add-form/add-form.component';
import { AddFormModalType, Expense } from '../types';
import { CardComponent } from '../shared/components/card/card.component';
import { Observable } from 'rxjs';
import { BudgetFacadeService } from '../store/budget/budget.facade.service';

@Component({
  selector: 'app-expenses',
  templateUrl: 'expenses.page.html',
  styleUrls: ['expenses.page.scss'],
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    IonRow,
    IonGrid,
    IonIcon,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class ExpensesPage implements OnInit {
  public expenses$: Observable<Expense[]>;
  private _storeFacade = inject(BudgetFacadeService);

  constructor(private _modalCtrl: ModalController) {
    addIcons({ addOutline });
  }

  ngOnInit(): void {
    this.expenses$ = this._storeFacade.expenses$;
  }

  public async openModal() {
    const modal = await this._modalCtrl.create({
      component: AddFormComponent,
      componentProps: {
        type: AddFormModalType.EXPENSE,
      },
    });
    modal.present();

    const { data: expense } = await modal.onWillDismiss();

    this._storeFacade.addExpense(expense);
  }
}
