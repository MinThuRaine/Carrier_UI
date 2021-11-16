import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Way,
  WaysService,
  Comment,
  CommentsService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-way-order-page',
  templateUrl: './way-order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WayOrderComponent implements OnInit {
  way: Way;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private wayServices: WaysService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { way: Way }) => {
        this.way = data.way;

        this.populateComments();
        this.cd.markForCheck();
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.way.owner.username);
        this.cd.markForCheck();
      }
    );
  }

  onToggleRequest(requested: boolean) {
    this.way.requested = requested;
console.log("EXPLAIN ",this.way.requested);
console.log("EXPLAIN CC",JSON.stringify(this.way));
    if (requested) {
      this.way.requestCount++;
    } else {
      this.way.requestCount--;
    }
  }

  trackByFn(index, item) {
    return index;
  }

  onToggleFollowing(following: boolean) {
    this.way.owner.following = following;
  }

  deleteWay() {
    this.isDeleting = true;

    this.wayServices.destroy(this.way.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    this.commentsService.getAll(this.way.slug)
      .subscribe(comments => {
        this.comments = comments;
        this.cd.markForCheck();
      });
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.way.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
          this.cd.markForCheck();
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
          this.cd.markForCheck();
        }
      );
  }

  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.way.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
          this.cd.markForCheck();
        }
      );
  }

}
