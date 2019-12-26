import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TodoComponent } from './todo/todo.component';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownComponent,
    TodoComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
