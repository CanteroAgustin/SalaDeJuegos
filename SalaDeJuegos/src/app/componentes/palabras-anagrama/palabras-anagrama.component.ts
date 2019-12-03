import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-palabras-anagrama',
  templateUrl: './palabras-anagrama.component.html',
  styleUrls: ['./palabras-anagrama.component.scss']
})
export class PalabrasAnagramaComponent implements OnInit {

  @Input() palabra: string;

  constructor() { }

  ngOnInit() {
  }

}
