import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/shared/device';
import { DeviceService } from 'src/app/shared/device.service';



@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  device: Device = new Device();
  submitted = false;

  constructor(public deviceService: DeviceService) { }


  ngOnInit(): void {
  }

 
  saveDevice(): void {
    this.deviceService.create(this.device).subscribe(() => {
      console.log('Created new device successfully');
      this.submitted = true;
    })
  }

  newDevice(): void {
    this.submitted = false;
    this.device = new Device();

  }



}
