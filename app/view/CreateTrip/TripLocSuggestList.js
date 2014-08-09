Ext.define('tripgang.view.CreateTrip.TripLocSuggestList', {
    extend: 'Ext.dataview.List',
    xtype: 'locSuggestList',
	id:'locSuggestsList',
    config: {
		store: 'LocSuggestLists',
        emptyText: 'Loading list of Locations...',
        itemTpl: [
            '<div class="">',
                '{formatted_address}',
            '</div>'
        ]
    }
});
