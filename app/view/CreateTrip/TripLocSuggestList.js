Ext.define('tripgang.view.CreateTrip.TripLocSuggestList', {
    extend: 'Ext.dataview.List',
    xtype: 'locSuggestList',
	id:'locSuggestsList',
    config: {
		store: 'LocSuggestList',
        emptyText: 'Loading list of Locations...',
        itemTpl: [
            '<div class="">',
                '{name}, Fun Start at {startDate}',
            '</div>'
        ]
    }
});
