import { Component, OnInit } from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private colorSchemeService: ColorSchemeService) {
    this.colorSchemeService.load();
  }

  ngOnInit(): void {
  }

}
