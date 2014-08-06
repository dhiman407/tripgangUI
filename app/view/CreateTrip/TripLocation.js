Ext.define('tripgang.view.CreateTrip.TripLocation', {
    extend: 'Ext.Container',
    xtype: 'tripLocation',
    requires: [
		'tripgang.view.CreateTrip.TripLocSuggestList',
    ],
    config: {
        layout:'fit',

        items: [
           {
		   	 layout:'vbox',
			 items:[
			 	{
					 xtype: 'map',
   					 useCurrentLocation: true,
					 flex:2
				},{
					xtype:'locSuggestList',
					flex:1
				}
			 ]
		   }
        ]
    }
});
