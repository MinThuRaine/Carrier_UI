import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Way, WayListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WaysService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: WayListConfig): Observable<{ways: Way[], wayCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });
console.log("CONFIG ", config);
    return this.apiService
    .get(
      '/ways' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(slug): Observable<Way> {
    return this.apiService.get('/ways/' + slug)
      .pipe(map(data => data.way));
  }

  destroy(slug) {
    return this.apiService.delete('/ways/' + slug);
  }

  save(way): Observable<Way> {
    // If we're updating an existing article
    if (way.slug) {
      return this.apiService.put('/ways/' + way.slug, {way: way})
        .pipe(map(data => data.way));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/ways/', {way: way})
        .pipe(map(data => data.way));
    }
  }

  request(slug): Observable<Way> {
    return this.apiService.post('/ways/' + slug + '/request');
  }

  unrequest(slug): Observable<Way> {
    return this.apiService.delete('/ways/' + slug + '/request');
  }


}
