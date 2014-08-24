Ext.define('tripgang.view.CreateTrip.TripType', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tripType',
    config: {
        id:'trip-type',
        title: 'Type of trip',
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