Ext.define('tripgang.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
	itemId:'mainScreen',
    requires: [
        'Ext.TitleBar',
        'tripgang.view.CreateTrip.TripType',
		'tripgang.view.CreateTrip.TripLocation',
		 'Ext.dataview.List'
    ],
    config: {
		 layout: {
            type: 'card',
            animation: {
                duration: 300,
                easing: 'ease-in-out',
                type: 'slide',
                direction: 'left'
            }
        },
		fullscreen:true,

        items: [
             {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Tripgang',
					titleAlign:'left'
                },{
					xtype:'tripType'
				},{
					xtype:'tripLocation'
				}
        ]
    }
	
});
