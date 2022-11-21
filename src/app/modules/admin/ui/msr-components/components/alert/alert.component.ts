import { Component } from '@angular/core';
import { MsrAlertService } from '@msr/components/alert';
import { MsrComponentsComponent } from 'app/modules/admin/ui/msr-components/msr-components.component';

@Component({
    selector   : 'alert',
    templateUrl: './alert.component.html',
    styles     : [
        `
            msr-alert {
                margin: 16px 0;
            }
        `
    ]
})
export class AlertComponent
{
    /**
     * Constructor
     */
    constructor(
        private _msrAlertService: MsrAlertService,
        private _msrComponentsComponent: MsrComponentsComponent
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void
    {
        // Dismiss
        this._msrAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void
    {
        // Show
        this._msrAlertService.show(name);
    }

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._msrComponentsComponent.matDrawer.toggle();
    }
}
