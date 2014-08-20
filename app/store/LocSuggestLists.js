Ext.define('tripgang.store.LocSuggestLists', {
    extend  : 'Ext.data.Store',

    config: {
        model: 'tripgang.model.LocSuggestList',
		autoLoad:true,
        proxy: {
            type: 'ajax',
            url: TG.baseUrl + '/data/suggestList.json',
			reader: {
				type: 'json'
		
			}
        }
    }
});
