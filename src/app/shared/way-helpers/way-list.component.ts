import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { Way, WayListConfig, WaysService } from '../../core';
@Component({
  selector: 'app-way-list',
  styleUrls: [],
  templateUrl: './way-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WayListComponent {
  constructor (
    private waysService: WaysService,
    private cd: ChangeDetectorRef
  ) {}

  query: WayListConfig;
  results: Way[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  @Input() limit: number;
  @Input()
  set config(config: WayListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  trackByFn(index, item) {
    return index;
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    }
    this.waysService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.ways;
console.log("GOT DATA ",JSON.stringify(data));
      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.wayCount / this.limit)), (val, index) => index + 1);
      this.cd.markForCheck();
    });
  }
}
