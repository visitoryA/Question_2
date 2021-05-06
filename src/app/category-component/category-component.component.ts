import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.less']
})
export class CategoryComponentComponent implements OnInit {

  category: string = '';
  data: string[] = [];
  dataSource: string[] = [];
  displayedColumns: string[] = ['category'];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.data = await fetch('https://api.publicapis.org/categories').then(res => res.json());
    this.dataSource = this.data;
    console.log(this.dataSource);
  }

  filterByInput() {
    const input = this.category.toLowerCase();
    this.dataSource = this.data.filter(it => it.toLowerCase().includes(input));
  }
}

