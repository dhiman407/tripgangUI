Ext.define('tripgang.store.PastTrips', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'tripgang.model.PastTrip',
		autoLoad:true,
        proxy: {
            type: 'ajax',
            url: TG.global.baseURL + 'data/pastTrip.json',
			reader: {
				type: 'json',
				rootProperty: 'pastTrips'
			}
        }
    }
});
