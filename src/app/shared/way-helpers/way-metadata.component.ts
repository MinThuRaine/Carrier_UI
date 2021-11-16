import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Way } from '../../core';

@Component({
  selector: 'app-way-metadata',
  templateUrl: './way-metadata.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WayMetaDataComponent {
  @Input() way: Way;
}
