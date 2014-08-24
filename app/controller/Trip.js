Ext.define('tripgang.controller.Trip',{
	extend:'Ext.app.Controller',
	config: {
		refs: {
			mainScreen:'main',
			suggestList:'locSuggestList',
			tripContainer:'tripLocation'
		},
		control: {
			'#trip-type': { 
				itemtap: 'onTripTypeTap'
			},
			'tripLocation #location_search_txt':{
				keyup:'searchLocations'
			},
			'loginmain #facebookLogin':{
				tap:'onFacebookLogin'
			}
		},
		routes: {
			'create-trip/types': 'displayTripTypesView',
			'create-trip/select-trip-location': 'displaySelectTripLocationView',
		}
	},
	
	//---- TripTypes Screen or Step 1 --------
	displayTripTypesView: function() {
		this.getMainScreen().push({
			xtype: "tripType"
		});
	},

	onTripTypeTap:function(list, idx, target, record, e, eOpts) {
		console.log(arguments);
		var me = this;
		setTimeout(function(){
			me.redirectTo("create-trip/select-trip-location");
		}, 0);
	},

	//---- Search Locations Screen or Step 2 --------
	displaySelectTripLocationView: function(latitude, longitude) {
		this.getMainScreen().push({
			xtype: "select-trip-location"
		});
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
