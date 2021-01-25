// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // ambiente de produccion (lo que ira al final)
  url_api: 'https://platzi-store.herokuapp.com',
  firebase: {
    apiKey: "AIzaSyCru0w1eZeh32HQZQ7V4Dtow6rmh613RFc",
    authDomain: "platzi-store-3dc5a.firebaseapp.com",
    projectId: "platzi-store-3dc5a",
    storageBucket: "platzi-store-3dc5a.appspot.com",
    messagingSenderId: "485303843228",
    appId: "1:485303843228:web:f3ac09525edbed3a567059"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
