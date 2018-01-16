import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() className: string;
    @Input() type: string;
    @Input() disabled: boolean;

    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        console.log(this.className);
    }

    handleClick(event: any) {
        this.onClick.emit(event);
    }
}
