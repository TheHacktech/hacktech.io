import './Polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './routes';
console.log("????");
platformBrowserDynamic().bootstrapModule(AppModule);
