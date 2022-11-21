import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MsrAlertModule } from '@msr/components/alert';
import { MsrCardModule } from '@msr/components/card';
import { MsrDrawerModule } from '@msr/components/drawer';
import { MsrHighlightModule } from '@msr/components/highlight';
import { MsrLoadingBarModule } from '@msr/components/loading-bar';
import { MsrMasonryModule } from '@msr/components/masonry/masonry.module';
import { MsrNavigationModule } from '@msr/components/navigation';
import { MsrScrollResetModule } from '@msr/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { MsrComponentsComponent } from 'app/modules/admin/ui/msr-components/msr-components.component';
import { MockApiComponent } from 'app/modules/admin/ui/msr-components/libraries/mock-api/mock-api.component';
import { AlertComponent } from 'app/modules/admin/ui/msr-components/components/alert/alert.component';
import { CardComponent } from 'app/modules/admin/ui/msr-components/components/card/card.component';
import { DrawerComponent } from 'app/modules/admin/ui/msr-components/components/drawer/drawer.component';
import { FullscreenComponent } from 'app/modules/admin/ui/msr-components/components/fullscreen/fullscreen.component';
import { HighlightComponent } from 'app/modules/admin/ui/msr-components/components/highlight/highlight.component';
import { NavigationComponent } from 'app/modules/admin/ui/msr-components/components/navigation/navigation.component';
import { MasonryComponent } from 'app/modules/admin/ui/msr-components/components/masonry/masonry.component';
import { ScrollbarComponent } from 'app/modules/admin/ui/msr-components/directives/scrollbar/scrollbar.component';
import { ScrollResetComponent } from 'app/modules/admin/ui/msr-components/directives/scroll-reset/scroll-reset.component';
import { ConfigComponent } from 'app/modules/admin/ui/msr-components/services/config/config.component';
import { ConfirmationComponent } from 'app/modules/admin/ui/msr-components/services/confirmation/confirmation.component';
import { LoadingBarComponent } from 'app/modules/admin/ui/msr-components/components/loading-bar/loading-bar.component';
import { MediaWatcherComponent } from 'app/modules/admin/ui/msr-components/services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from 'app/modules/admin/ui/msr-components/services/splash-screen/splash-screen.component';
import { FindByKeyComponent } from 'app/modules/admin/ui/msr-components/pipes/find-by-key/find-by-key.component';
import { MustMatchComponent } from 'app/modules/admin/ui/msr-components/validators/must-match/must-match.component';
import { msrComponentsRoutes } from 'app/modules/admin/ui/msr-components/msr-components.routing';

@NgModule({
    declarations: [
        MsrComponentsComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DrawerComponent,
        FullscreenComponent,
        HighlightComponent,
        LoadingBarComponent,
        MasonryComponent,
        NavigationComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        ConfirmationComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports     : [
        RouterModule.forChild(msrComponentsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        MsrAlertModule,
        MsrCardModule,
        MsrDrawerModule,
        MsrHighlightModule,
        MsrLoadingBarModule,
        MsrMasonryModule,
        MsrNavigationModule,
        MsrScrollResetModule,
        SharedModule
    ]
})
export class MsrComponentsModule
{
}
