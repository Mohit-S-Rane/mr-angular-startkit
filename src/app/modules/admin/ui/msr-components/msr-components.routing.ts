import { Route } from '@angular/router';
import { MsrComponentsComponent } from 'app/modules/admin/ui/msr-components/msr-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/msr-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/msr-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/msr-components/components/card/card.component';
import { DrawerComponent } from 'app/modules/admin/ui/msr-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/msr-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/msr-components/components/highlight/highlight.component';
import { LoadingBarComponent } from 'app/modules/admin/ui/msr-components/components/loading-bar/loading-bar.component';
import { MasonryComponent } from 'app/modules/admin/ui/msr-components/components/masonry/masonry.component';
import { NavigationComponent } from 'app/modules/admin/ui/msr-components/components/navigation/navigation.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/msr-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/msr-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/msr-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/msr-components/services/confirmation/confirmation.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/msr-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/msr-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/msr-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/msr-components/validators/must-match/must-match.component';

export const msrComponentsRoutes: Route[] = [
    {
        path     : '',
        component: MsrComponentsComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'libraries/mock-api'
            },
            {
                path    : 'libraries',
                children: [
                    {
                        path     : 'mock-api',
                        component: MockApiComponent
                    }
                ]
            },
            {
                path    : 'components',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'alert'
                    },
                    {
                        path     : 'alert',
                        component: AlertComponent
                    },
                    {
                        path     : 'card',
                        component: CardComponent
                    },
                    {
                        path     : 'drawer',
                        component: DrawerComponent
                    },
                    {
                        path     : 'fullscreen',
                        component: FullscreenComponent
                    },
                    {
                        path     : 'highlight',
                        component: HighlightComponent
                    },
                    {
                        path     : 'loading-bar',
                        component: LoadingBarComponent
                    },
                    {
                        path     : 'masonry',
                        component: MasonryComponent
                    },
                    {
                        path     : 'navigation',
                        component: NavigationComponent
                    }
                ]
            },
            {
                path    : 'directives',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'scrollbar'
                    },
                    {
                        path     : 'scrollbar',
                        component: ScrollbarComponent
                    },
                    {
                        path     : 'scroll-reset',
                        component: ScrollResetComponent
                    }
                ]
            },
            {
                path    : 'services',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'config'
                    },
                    {
                        path     : 'config',
                        component: ConfigComponent
                    },
                    {
                        path     : 'confirmation',
                        component: ConfirmationComponent
                    },
                    {
                        path     : 'splash-screen',
                        component: SplashScreenComponent
                    },
                    {
                        path     : 'media-watcher',
                        component: MediaWatcherComponent
                    }
                ]
            },
            {
                path    : 'pipes',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'find-by-key'
                    },
                    {
                        path     : 'find-by-key',
                        component: FindByKeyComponent
                    }
                ]
            },
            {
                path    : 'validators',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'must-match'
                    },
                    {
                        path     : 'must-match',
                        component: MustMatchComponent
                    }
                ]
            }
        ]
    }
];
