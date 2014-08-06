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
		}
	},
	
	onTripTypeTap:function(list,idx,target,record,e,eOpts){
		this.getMainScreen().setActiveItem(2);
	}

});
