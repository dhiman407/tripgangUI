Ext.define('tripgang.view.CreateTrip.TripType', {
    extend: 'Ext.dataview.List',
    xtype: 'tripType',
	id:'tripsList',
    config: {
		store: 'TripTypes',
        emptyText: 'Loading list of Type of Trips...',
        itemTpl: [
            '<div class="legislator-list-item">',
                '{name}, Fun Start at {startDate}',
            '</div>'
        ]
    }
});
