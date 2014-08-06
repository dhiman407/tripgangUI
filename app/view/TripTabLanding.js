Ext.define('tripgang.view.TripType', {
    extend: 'Ext.Container',
    xtype: 'tripType',
    requires: [
		'tripgang.view.upComingTrips.UpcomingTrip',
		'tripgang.view.pastTrips.PastTrip',
        'Ext.Video',
		'Ext.SegmentedButton'
    ],
    config: {
        layout:'fit',

        items: [
           {
		   	 layout:'vbox',
			 items:[
			 	{
					xtype:'segmentedbutton',
					allowDepress:true,
					defaults: {
							flex: 1
						},
					layout:{
						type:'hbox'
					},
					items:[
						{
							text:'Upcoming Trips',
							pressed:true,
							handler:function(){
								console.log("Picked #1");
								 Ext.getCmp('tripContainer').setActiveItem(0);
							}	
						},
						{
							text:'Past Trips',
							handler:function(){
								console.log("Picked #2");
								Ext.getCmp('tripContainer').setActiveItem(1);
							}	
						}
						
					]
				},{
					xtype:'container',
					flex:10,
					id:'tripContainer',
					layout:{
						type:'card'
					},
					items:[{
						xtype:'upcomingTrip'
					},{
						xtype:'pastTrip'
					}]
					
				}
			 ]
		   }
        ]
    }
});
