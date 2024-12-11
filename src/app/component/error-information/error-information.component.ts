import { Component } from '@angular/core';
import { Resource } from 'src/app/model/constants';

@Component({
  selector: 'app-error-information',
  templateUrl: './error-information.component.html',
  styleUrls: ['./error-information.component.scss']
})
export class ErrorInformationComponent {

  Resource = Resource;

}
