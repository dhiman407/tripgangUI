Ext.define('tripgang.view.pastTrips.PastTrip', {
    extend: 'Ext.dataview.List',
    xtype: 'pastTrip',
	id:'PastTripsList',
    config: {
		store: 'PastTrips',
        emptyText: 'Loading list of Trips...',
        itemTpl: [
            '<div class="legislator-list-item">',
                '{name}, Fun Start at {startDate}',
            '</div>'
        ]
    }
});
