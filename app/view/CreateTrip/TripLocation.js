Ext.define('tripgang.view.CreateTrip.TripLocation', {
    extend: 'Ext.Container',
    xtype: 'tripLocation',
    requires: [
		'tripgang.view.CreateTrip.TripLocSuggestList',
		'Ext.form.Panel'
    ],
    config: {
        layout:'fit',

        items: [
           {
		   	 layout:'vbox',
		   	 align:'center',
			 items:[
			 	{
			 		xtype:'formpanel',
			 		flex:0.1,
			 		items:[{
			 				xtype:'textfield',
			 				align:'center',
			 				width:200,
			 				itemId:'location_search_txt'
			 		
			 			}]
			 		
			 		
			 	},
			 	{
					xtype:'locSuggestList',
					flex:1
				}
			 ]
		   }
        ]
    }
});
