import { Component, Input } from '@angular/core';
import { RoomStatus, Resource, CssClass } from 'src/app/model/constants';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  @Input()
  roomName: string | undefined;
  @Input()
  roomDisplayName: string | undefined;
  @Input()
  userName: string | undefined;
  @Input()
  roomStatus: string | undefined;
  @Input()
  joinUrl: string | undefined;

  wholeCardClass: string | undefined;
  RoomStatus = RoomStatus;
  Resource = Resource;
  CssClass = CssClass;

  constructor() {

  }

  ngOnInit() {
    // Switch the card css class with the injected room status string.
    switch (this.roomStatus) {
      case RoomStatus.VACANT: {
        this.wholeCardClass = CssClass.VACANT_ROOM_CARD_CLASS;
        break;
      }
      case RoomStatus.IN_USE: {
        this.wholeCardClass = CssClass.IN_USE_ROOM_CARD_CLASS;
        break;
      }
    }
  }


}
