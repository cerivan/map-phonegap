function onDeviceReady() {
	BackgroundGeolocation.configure({
		locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
		desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
		stationaryRadius: 50,
		distanceFilter: 50,
		notificationTitle: 'Background tracking',
		notificationText: 'enabled',
		debug: true,
		interval: 10000,
		fastestInterval: 5000,
		activitiesInterval: 10000,
		startForeground: true,
		url: 'http://cemex.logatik.fr/data.php', 
		/* httpHeaders: {
			'X-FOO': 'bar'
		}, */
		// customize post properties
		postTemplate: {
			lat: '@latitude',
			lng: '@longitude',
			//foo: 'bar' // you can also add your own properties
		}
	});
	BackgroundGeolocation.start();
	BackgroundGeolocation.on('location', function(location) {
		// handle your locations here
		// to perform long running operation on iOS
		// you need to create background task
		console.log("location",location)
		
	});

	
}

document.addEventListener('deviceready', onDeviceReady, false);









