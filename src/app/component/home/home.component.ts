import { Component } from '@angular/core';
import { HttpRequestService } from 'src/app/service/http-request/http-request.service';
import { ZoomStatus, ZoomStatusResponse } from 'src/app/model/types';
import { Resource } from 'src/app/model/constants';
import { LoadingSpinnerService } from 'src/app/service/loading-spinner/loading-spinner.service';
import { Environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  roomName: string | undefined;
  userName: string | undefined;
  roomStatus: string | undefined;
  zoomStatusList: ZoomStatus[] | undefined;
  requestTimestamp: string | undefined;
  Resource = Resource;
  isError: boolean | undefined;

  constructor(private httpRequestService: HttpRequestService,
    private loadingSpinnerService: LoadingSpinnerService) {

  }

  ngOnInit() {
    this.getZoomStatus();
  }

  onRefresh() {
    this.getZoomStatus();
  }

  getZoomStatus() {
    this.loadingSpinnerService.show();

    this.httpRequestService.postRequest(Environment.apiUrl).subscribe({
      next: (zoomStatusResponse: ZoomStatusResponse) => {
        this.zoomStatusList = zoomStatusResponse.zoomStatusList;
        this.requestTimestamp = zoomStatusResponse.requestTimeStamp;
        this.isError = false;

      },
      error: () => {
        this.isError = true;
      },
      complete: () => {

      }
    }).add(() => {
      this.loadingSpinnerService.hide();
    });

  }
}
