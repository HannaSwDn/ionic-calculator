import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  constructor() {}

  // add function for the power button
  reset() {
    let screen: HTMLElement = document.querySelector('.screen')
    screen.innerHTML = ''
  }

  window.onkeydown = (): any => {
    let screen: HTMLElement = document.querySelector('.screen')
    screen.innerHTML = 'errors'
  }

  // add calculate function
  calculate() {
    let screen: HTMLElement = document.querySelector('.screen')
    screen.innerHTML = 'error'
  }

}