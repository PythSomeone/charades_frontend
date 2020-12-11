import {Component, OnInit} from '@angular/core';
import {BasicCategoriesService} from '../_services/basic-categories.service';
import {Router} from '@angular/router';
import {ColorSchemeService} from '../_services/color-scheme.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  userCategories = [];
  animals: object;

  constructor(private basicCategoriesService: BasicCategoriesService,
              private router: Router,
              private colorSchemeService: ColorSchemeService) {
    colorSchemeService.load();
  }

  ngOnInit(): void {
  }

  listAnimals(): void {
    this.animals = this.basicCategoriesService.getAnimals();
  }


  back(): void {
    this.router.navigate(['p']);
  }

}
