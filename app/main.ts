/**
 * Created by abc on 01-Jun-16.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
    appRouterProviders,
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS
]);
