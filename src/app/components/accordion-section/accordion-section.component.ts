import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css']
})
export class AccordionSectionComponent implements OnInit {

  indexPh:Array<any> = [
    { index: 0, color: '#F70000' },
    { index: 1, color: '#EA5400' },
    { index: 2, color: '#FF7A00' },
    { index: 3, color: '#FFB800' },
    { index: 4, color: '#ADFF00' },
    { index: 5, color: '#70FF00' },
    { index: 6, color: '#42FF00' },
    { index: 7, color: '#05FF00' },
    { index: 8, color: '#00FF38' },
    { index: 9, color: '#00FFD1' },
    { index: 10, color: '#0085FF' },
    { index: 11, color: '#0047FF' },
    { index: 12, color: '#3300FF' },
    { index: 13, color: '#5200FF' },
    { index: 14, color: '#4D02AC' }
  ];
  currentPh: number = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
