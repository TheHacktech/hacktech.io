//import 'core-js/es6/reflect';
//import 'core-js/es7/reflect';
import './Polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './routes';
console.log("????");
platformBrowserDynamic().bootstrapModule(AppModule);
