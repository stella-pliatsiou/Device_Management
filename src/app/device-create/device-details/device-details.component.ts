import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/app/shared/device';
import { DeviceService } from 'src/app/shared/device.service';




@Component({
    selector: 'app-device-details',
    templateUrl: './device-details.component.html',
    styleUrls: ['./device-details.component.css']
})

export class DeviceDetailsComponent implements OnInit, OnChanges {
    @Input() device: Device;
    @Output() refreshList: EventEmitter<any> = new EventEmitter();
    currentDevice: Device = null;
    message = '';


    constructor(private deviceService: DeviceService) { }


    ngOnInit(): void {
        this.message = '';
    }



    ngOnChanges(): void {
        this.message = '';
        this.currentDevice = { ...this.device };
    }


    // uodate device data
    updateDevice(): void {
        const data = {
            // serialnumber: this.currentDevice.serialnumber,
            description: this.currentDevice.description,
            type: this.currentDevice.type
        };

        this.deviceService.update(this.currentDevice.serialnumber, data)
            .subscribe(() => this.message = 'The device was updated successfully!')

    }

    // delete device
    deleteDevice(): void {
        this.deviceService.delete(this.currentDevice.serialnumber)
            .subscribe(() => {
                this.refreshList.emit();
                this.message = 'The device was updated successfully!';
            })


    }
}

