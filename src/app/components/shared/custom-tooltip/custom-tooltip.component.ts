import { Component, Input } from '@angular/core';

export interface CustomTooltipData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent {
  @Input() data: CustomTooltipData;
}
