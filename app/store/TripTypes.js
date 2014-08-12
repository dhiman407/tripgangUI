Ext.define('tripgang.store.TripTypes', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'tripgang.model.TripType',
		autoLoad:true,
        proxy: {
            type: 'ajax',
            url: TG.global.baseURL + 'data/trip_types.json',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
        }
    }
});
