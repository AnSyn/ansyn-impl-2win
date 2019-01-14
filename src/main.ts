import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { fetchConfigProviders } from '@ansyn/ansyn';

if (environment.production) {
  enableProdMode();
}

const mergeChanges = {
  'casesConfig': {
    'defaultCase': {
      'state': {
        'facets': {
          'showOnlyFavorites': false,
          'filters': [
            {
              'metadata': {
                'displayTrue': true,
                'displayFalse': true
              }
            }
          ]
        }
      }
    }
  },
  'coreConfig': {
    'noInitialSearch': true
  }
};

fetchConfigProviders('assets/app.config.json', mergeChanges)
  .then(providers => platformBrowserDynamic(providers).bootstrapModule(AppModule).catch(err => console.log(err)));
