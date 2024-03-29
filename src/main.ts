// Lib required for class-transformer lib
// WARNING: this import should be at the top of this file, otherwise app broken
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// @TODO should work without it, since it's included in polyfills, but doesn't work since angular17
import 'zone.js';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
