import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Way } from '../../core';

@Component({
  selector: 'app-way-preview',
  templateUrl: './way-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WayPreviewComponent {
  @Input() way: Way;

  trackByFn(index, item) {
    return index;
  }

  onToggleRequest(requested: boolean) {
    this.way['requested'] = requested;
    if (requested) {
      this.way['requestCount']++;
    } else {
      this.way['requestCount']--;
    }
  }
}
