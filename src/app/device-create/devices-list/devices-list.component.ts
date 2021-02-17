import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/shared/device.service';


@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  devices: any;
  currentDevice = null;
  currentIndex = -1;
  serialnumber = '';



  constructor(public deviceService: DeviceService) { }

  ngOnInit(): void {
    this.retrieveDevices();

  }


  refreshList(): void {
    this.currentDevice = null;
    this.currentIndex = -1;
    this.retrieveDevices();
  }


  retrieveDevices() {
    return this.deviceService.getDevice()
      .subscribe(data => {
        this.devices = data;
      });

  }

  setActiveDevice(device, index): void {
    this.currentDevice = device;
    this.currentIndex = index;
  }

  removeAllDevices(): void {
    this.deviceService.deleteAll()
      .subscribe(() => this.refreshList())


  }
}


