import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

    @Input() compteur: number;
    @Output() resultEmitter = new EventEmitter();

    getResult() {
      this.resultEmitter.emit({ value: this.compteur });
    }

    increment(){
        this.compteur++;
        this.getResult();
    }

    decrement(){
        this.compteur--;
        this.getResult();
    }

    constructor() {
    }

    ngOnInit() {
    } 

}
