import { Component } from '@angular/core';
import { MsrComponentsComponent } from 'app/modules/admin/ui/msr-components/msr-components.component';

@Component({
    selector   : 'must-match',
    templateUrl: './must-match.component.html'
})
export class MustMatchComponent
{
    /**
     * Constructor
     */
    constructor(private _msrComponentsComponent: MsrComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._msrComponentsComponent.matDrawer.toggle();
    }
}
