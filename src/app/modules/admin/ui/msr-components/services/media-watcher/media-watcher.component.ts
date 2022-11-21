import { Component } from '@angular/core';
import { MsrComponentsComponent } from 'app/modules/admin/ui/msr-components/msr-components.component';

@Component({
    selector   : 'media-watcher',
    templateUrl: './media-watcher.component.html'
})
export class MediaWatcherComponent
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
