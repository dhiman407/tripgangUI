Ext.define('tripgang.view.CreateTrip.TripType', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tripType',
	id:'tripsList',
    config: {
		store: 'TripTypes',
        emptyText: 'Loading list of Type of Trips...',
        itemTpl: [
            '<div class="trip-type-item">',
                '<span class="trip-type-icon">&nbsp;</span>',
                '{name}',
            '</div>'
        ]
    }
});