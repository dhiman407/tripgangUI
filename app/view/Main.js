Ext.define('tripgang.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        'tripgang.view.CreateTrip.TripType',
		'tripgang.view.CreateTrip.SelectTripLocation',
    ],
    config: {
        itemId:'mainScreen',
		fullscreen: true,
        activeItem: 0,

        items: [
            {
                xtype:'tripType'
            }
        ]
    }
	
});