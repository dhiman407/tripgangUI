Ext.define('tripgang.controller.Trip',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			mainScreen:'main',
			suggestList:'locSuggestList',
			tripContainer:'tripLocation'
		},
		control:{
			tripType:{
				itemtap:'onTripTypeTap'
			},
			'tripLocation #location_search_txt':{
				keyup:'searchLocations'
			}
		}
	},

	app_state: {

	},
	
	onTripTypeTap:function(list,idx,target,record,e,eOpts){
		this.getMainScreen().setActiveItem(2);
	},

	searchLocations:function(txt, newVal, oldVal){
		var that = this;
		var task = Ext.create('Ext.util.DelayedTask', function () {
        var val = txt.getValue();
			var service = new google.maps.places.PlacesService(document.getElementById("canvas"));
			service.textSearch({query:val}, function(result,status){
				that.getSuggestList().setHidden(false);
				Ext.data.StoreManager.lookup("LocSuggestLists").setData(result);
			});
        
    });
	task.delay(500);
	}

});
