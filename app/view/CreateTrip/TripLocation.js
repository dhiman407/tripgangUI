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
		   	 layout:{
			 	type:'vbox',
				pack:'justify'
				},
			 items:[
			 	{
			 		xtype:'formpanel',
			 		flex:0.3,
					config:{
						cls:'searchFormPanel'
					},
			 		items:[{
			 				xtype:'textfield',
			 				itemId:'location_search_txt',
							margin:'0.5em 1em 0.5em 1em'
			 			}]		
			 		
			 	},
			 	{
					xtype:'locSuggestList',
					flex:1,
					hidden:true
				}
			 ]
		   }
        ]
    }
});
