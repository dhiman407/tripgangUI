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
			},
			'loginmain #facebookLogin':{
				tap:'onFacebookLogin'
			}
		}
	},
	
	onTripTypeTap:function(list,idx,target,record,e,eOpts){
		this.getMainScreen().setActiveItem(2);
	},

	onFacebookLogin:function(){
		return true;
		var that = this;	
		this.checkLoginState();
	},
	
	  statusChangeCallback:function (response) {
	    console.log('statusChangeCallback');
	    console.log(response);
	    // The response object is returned with a status field that lets the
	    // app know the current login status of the person.
	    // Full docs on the response object can be found in the documentation
	    // for FB.getLoginStatus().
	    if (response.status === 'connected') {
	      // Logged into your app and Facebook.
	      this.testAPI();
	    } else if (response.status === 'not_authorized') {
	      // The person is logged into Facebook, but not your app.
	      document.getElementById('status').innerHTML = 'Please log ' +
	        'into this app.';
	    } else {
	      // The person is not logged into Facebook, so we're not sure if
	      // they are logged into this app or not.
	      document.getElementById('status').innerHTML = 'Please log ' +
	        'into Facebook.';
	    }
 	 },

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  	checkLoginState:function () {
		var that = this;
	    FB.getLoginStatus(function(response) {
	      that.statusChangeCallback(response);
	    });
  	},
	
	testAPI: function() {
	    console.log('Welcome!  Fetching your information.... ');
	    FB.api('/me', function(response) {
	      console.log('Successful login for: ' + response.name);
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
