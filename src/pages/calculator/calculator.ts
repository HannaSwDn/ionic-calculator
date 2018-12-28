import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // add function for the power button
  reset() {
    let screen: HTMLElement = document.querySelector('.screen')
    let second: number = 0

    setInterval(function(){
      second++
      if (second % 2 == 0) {
        screen.innerHTML = ''
      } else if (second % 2 != 0) {
        screen.innerHTML = '.'
      }
    }, 500);
  }

  // add calculate function

}