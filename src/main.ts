import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { Auth } from 'aws-amplify';
// import {Amplify , Storage } from 'aws-amplify';

// Amplify.configure({
//   Auth : {
//     region : 'us-west-1',
//     userPoolId : 'us-west-1_mYonfxRNb',
//     userPoolWebClientId : '3bucoc11ghlf6pvhju64m3n2rf',
//     authenticationFlowType : 'USER_PASSWORD_AUTH',
//     identityPoolId: 'us-west-1:aaf82052-64ab-4071-8acc-b5c4095b4621',
//   },
//   Storage: {
//     AWSS3: {
//         bucket: 'seappbucket1', 
//         region: 'us-west-1', 
//     }
//   }
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
