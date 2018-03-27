import { config } from 'dotenv';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

config();
platformBrowserDynamic().bootstrapModule(AppModule);
