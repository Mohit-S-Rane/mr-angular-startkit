import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MsrNavigationItem } from '@msr/components/navigation';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { MsrMediaWatcherService } from '@msr/services/media-watcher';

@Component({
    selector     : 'msr-components',
    templateUrl  : './msr-components.component.html',
    styleUrls    : ['./msr-components.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MsrComponentsComponent implements OnInit, OnDestroy
{
    @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;
    drawerMode: 'side' | 'over';
    drawerOpened: boolean;
    menuData: MsrNavigationItem[];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _msrMediaWatcherService: MsrMediaWatcherService
    )
    {
        this.menuData = [
            {
                id      : 'msr-components.libraries',
                title   : 'Libraries',
                type    : 'group',
                children: [
                    {
                        id   : 'msr-components.libraries.mock-api',
                        title: 'MockAPI',
                        type : 'basic',
                        link : '/ui/msr-components/libraries/mock-api'
                    }
                ]
            },
            {
                id      : 'msr-components.components',
                title   : 'Components',
                type    : 'group',
                children: [
                    {
                        id   : 'msr-components.components.alert',
                        title: 'Alert',
                        type : 'basic',
                        link : '/ui/msr-components/components/alert'
                    },
                    {
                        id   : 'msr-components.components.card',
                        title: 'Card',
                        type : 'basic',
                        link : '/ui/msr-components/components/card'
                    },
                    {
                        id   : 'msr-components.components.drawer',
                        title: 'Drawer',
                        type : 'basic',
                        link : '/ui/msr-components/components/drawer'
                    },
                    {
                        id   : 'msr-components.components.fullscreen',
                        title: 'Fullscreen',
                        type : 'basic',
                        link : '/ui/msr-components/components/fullscreen'
                    },
                    {
                        id   : 'msr-components.components.highlight',
                        title: 'Highlight',
                        type : 'basic',
                        link : '/ui/msr-components/components/highlight'
                    },
                    {
                        id   : 'msr-components.components.loading-bar',
                        title: 'Loading Bar',
                        type : 'basic',
                        link : '/ui/msr-components/components/loading-bar'
                    },
                    {
                        id   : 'msr-components.components.masonry',
                        title: 'Masonry',
                        type : 'basic',
                        link : '/ui/msr-components/components/masonry'
                    },
                    {
                        id   : 'msr-components.components.navigation',
                        title: 'Navigation',
                        type : 'basic',
                        link : '/ui/msr-components/components/navigation'
                    }
                ]
            },
            {
                id      : 'msr-components.directives',
                title   : 'Directives',
                type    : 'group',
                children: [
                    {
                        id   : 'msr-components.directives.scrollbar',
                        title: 'Scrollbar',
                        type : 'basic',
                        link : '/ui/msr-components/directives/scrollbar'
                    },
                    {
                        id   : 'msr-components.directives.scroll-reset',
                        title: 'ScrollReset',
                        type : 'basic',
                        link : '/ui/msr-components/directives/scroll-reset'
                    }
                ]
            },
            {
                id      : 'msr-components.services',
                title   : 'Services',
                type    : 'group',
                children: [
                    {
                        id   : 'msr-components.services.config',
                        title: 'Config',
                        type : 'basic',
                        link : '/ui/msr-components/services/config'
                    },
                    {
                        id   : 'msr-components.services.confirmation',
                        title: 'Confirmation',
                        type : 'basic',
                        link : '/ui/msr-components/services/confirmation'
                    },
                    {
                        id   : 'msr-components.services.splash-screen',
                        title: 'SplashScreen',
                        type : 'basic',
                        link : '/ui/msr-components/services/splash-screen'
                    },
                    {
                        id   : 'msr-components.services.media-watcher',
                        title: 'MediaWatcher',
                        type : 'basic',
                        link : '/ui/msr-components/services/media-watcher'
                    }
                ]
            },
            {
                id      : 'msr-components.pipes',
                title   : 'Pipes',
                type    : 'group',
                children: [
                    {
                        id   : 'msr-components.pipes.find-by-key',
                        title: 'FindByKey',
                        type : 'basic',
                        link : '/ui/msr-components/pipes/find-by-key'
                    }
                ]
            },
            {
                id      : 'msr-components.validators',
                title   : 'Validators',
                type    : 'group',
                children: [
                    {
                        id   : 'msr-components.validators.must-match',
                        title: 'MustMatch',
                        type : 'basic',
                        link : '/ui/msr-components/validators/must-match'
                    }
                ]
            }
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media query change
        this._msrMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('md') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
