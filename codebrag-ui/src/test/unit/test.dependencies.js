// Libraries
EnvJasmine.loadGlobal(EnvJasmine.libDir + "jquery-1.8.2-min.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "angular-1.1.1.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "angular-resource-1.1.1.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "angular-sanitize-1.1.1.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "angular-cookies-1.1.1.js");
EnvJasmine.loadGlobal(EnvJasmine.libDir + "bootstrap-2.2.2.js");


// Testing libraries
EnvJasmine.loadGlobal(EnvJasmine.testDir + "../lib/require/require-2.0.6.js");
EnvJasmine.loadGlobal(EnvJasmine.testDir + "require.conf.js");
EnvJasmine.loadGlobal(EnvJasmine.testDir + "../lib/angular/angular-mocks-1.1.1.js");

// Application
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "app.js");
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "services/flashService.js");
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "effects/effects.js")

EnvJasmine.loadGlobal(EnvJasmine.rootDir + "controllers/loginCtrl.js");
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "controllers/userSessionCtrl.js");

EnvJasmine.loadGlobal(EnvJasmine.rootDir + "services/userSessionService.js");
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "controllers/uptimeCtrl.js");
EnvJasmine.loadGlobal(EnvJasmine.rootDir + "services/utilService.js");
