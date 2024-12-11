import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingSpinnerComponent } from 'src/app/component/loading-spinner/loading-spinner.component';


@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private overlayRef: OverlayRef | undefined;

  constructor(private readonly _overlay: Overlay) {
    this.overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position().global().centerHorizontally().centerVertically()
    });
  }

  show() {
    this.overlayRef?.attach(new ComponentPortal(LoadingSpinnerComponent));
  }

  hide(){
    this.overlayRef?.detach();
  }

}
