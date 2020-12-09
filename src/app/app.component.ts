import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ES_CONFIG } from '../config/esConfig';
import { EN_CONFIG } from '../config/enConfig';

export interface IMove {
  moveName: string;
  minDamage: number;
  maxDamage: number;
  attack: number;
  blood: number;
  firstSkill: string;
  secondSkill: string;
  totalSkill: number;
  requiredPosition: string;
  obtainedPosition: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['moveName', 'minDamage', 'maxDamage', 'attack', 'blood', 'firstSkill', 'secondSkill', 'totalSkill', 'requiredPosition', 'obtainedPosition'];
  dataSource: MatTableDataSource<IMove>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  language: string;

  config = ES_CONFIG;

  constructor() {
    this.dataSource = new MatTableDataSource(this.config.moves);
  }

  setLanguage(language: string): void {
    if (language === 'es') {
      this.config = ES_CONFIG;
      this.dataSource = new MatTableDataSource(this.config.moves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else if (language === 'en') {
      this.config = EN_CONFIG;
      this.dataSource = new MatTableDataSource(this.config.moves);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
