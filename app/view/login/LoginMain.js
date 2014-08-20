Ext.define('tripgang.view.login.LoginMain', {
    extend: 'Ext.Panel',
    xtype: 'loginmain',
	itemId:'loginScreen',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
		fullscreen:true,
		layout:{
			type:'vbox',
			align:'center'
		},
        items: [
		{
                    docked: 'top',
                    xtype: 'titlebar',
					//flex:0.1,
                    title: 'Tripgang',
					titleAlign:'left'
                },
		{
			xtype:'button',
			text:'facebook',
			itemId:'facebookLogin',
			width:300,
			flex:1
		},
		{
			xtype:'button',
			text:'Twitter',
			width:300,
			flex:1
		},
		{
			xtype:'button',
			text:'Google',
			width:300,
			flex:1
		}
        ]
    }
	
});
