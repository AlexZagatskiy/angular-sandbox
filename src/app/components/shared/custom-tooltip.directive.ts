import { ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomTooltipComponent, CustomTooltipData } from "./custom-tooltip/custom-tooltip.component";


@Directive({
  selector: '[customTooltip]'
})
export class CustomTooltipDirective implements OnDestroy {
  private overlayRef: OverlayRef;
  @Input('customTooltip') data: CustomTooltipData;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay,
  ) {
  }

  createOverlayRef() {
    const leftSide = false; // leftSide can be calculated depend on Inputs
    const options: ConnectedPosition = {
      originX: leftSide ? 'start' : 'end',
      overlayX: leftSide ? 'end' : 'start',
      originY: 'center',
      overlayY: 'center',
      offsetX: 15 * (leftSide ? -1 : 1),
      panelClass: leftSide ? 'arrow-right' : 'arrow-left',
    };
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([options]);

    return this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseover')
  show() {
    this.overlayRef = this.createOverlayRef();
    const tooltipPortal = new ComponentPortal(CustomTooltipComponent);
    const tooltipRef: ComponentRef<CustomTooltipComponent> = this.overlayRef.attach(tooltipPortal);
    tooltipRef.instance.data = this.data;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
