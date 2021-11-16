import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Way, WaysService } from '../core';

@Component({
  selector: 'app-way-page',
  templateUrl: './way.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WayComponent implements OnInit {
  way: Way = {} as Way;
  wayForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private waysService: WaysService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    // use the FormBuilder to create a form group
    this.wayForm = this.fb.group({
      title: '',
      description: '',
      body: ''
    });

    // Initialized tagList as empty array
    this.way.tagList = [];

    // Optional: subscribe to value changes on the form
    // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
  }

  ngOnInit() {
    // If there's an article prefetched, load it
    this.route.data.subscribe((data: { article: Way }) => {
      if (data.article) {
        this.way = data.article;
        this.wayForm.patchValue(data.article);
        this.cd.markForCheck();
      }
    });
  }

  trackByFn(index, item) {
    return index;
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.way.tagList.indexOf(tag) < 0) {
      this.way.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.way.tagList = this.way.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateArticle(this.wayForm.value);

    // post the changes
    this.waysService.save(this.way).subscribe(
      way => {
        this.router.navigateByUrl('/way-order/' + way.slug);
        this.cd.markForCheck();
      },
      err => {
        this.errors = err;
        this.isSubmitting = false;
        this.cd.markForCheck();
      }
    );
  }

  updateArticle(values: Object) {
    Object.assign(this.way, values);
  }
}
