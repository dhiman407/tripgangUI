Ext.define('tripgang.controller.Trip',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			mainScreen:'main'
		},
		control:{
			tripType:{
				itemtap:'onTripTypeTap'
			},
			'tripLocation #location_search_txt':{
				change:'searchLocations'
			}
		}
	},
	
	onTripTypeTap:function(list,idx,target,record,e,eOpts){
		this.getMainScreen().setActiveItem(2);
	},

	searchLocations:function(txt, newVal, oldVal){

		var service = new google.maps.places.PlacesService(document.getElementById("canvas"));
		service.textSearch({query:newVal}, function(result,status){
			Ext.data.StoreManager.lookup("LocSuggestLists").loadData(result);
		});
		//Ext.data.StoreManager.lookup("LocSuggestLists").load();
	}

});
