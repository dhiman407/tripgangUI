Ext.define('tripgang.store.TripTypes', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'tripgang.model.TripType',
		autoLoad:true,
        proxy: {
            type: 'ajax',
            url: TG.global.baseURL + 'data/upComingTrip.json',
			reader: {
				type: 'json',
				rootProperty: 'upComingTrips'
			}
        }
    }
});
