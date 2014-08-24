Ext.define('tripgang.controller.Facebook', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox'],

    config: {
        control: {
        }
    },

    /**
     * Load the Facebook Javascript SDK asynchronously
     */
    init: function() {
        debugger;
        window.fbAsyncInit = Ext.bind(this.onFacebookInit, this);

        (function(d){
            var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
            js = d.createElement('script'); js.id = id; js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";
            d.getElementsByTagName('head')[0].appendChild(js);
        }(document));
    },

    onFacebookInit: function() {

        if (tripgang.app.facebookAppId === '') return;

        var me = this;

        FB.init({
            appId  : tripgang.app.facebookAppId,
            xfbml      : true,
            version    : 'v1.0',
            cookie : true
        });

        FB.getLoginStatus(function(response) {
            Ext.Viewport.setMasked(false);
            if (response.status == 'connected') {
                me.onLogin();
            } else {
                me.login();
            }
        });
    },

    showLoginTextFB : function(){
        Ext.ComponentQuery.query('#facebookLogin')[0].setHtml([
            '<a class="fbLogin" href="https://m.facebook.com/dialog/oauth?' + tripgang.app.redirectUrl + '"></a>',
            '<div class="fb-facepile" data-app-id="' + tripgang.app.facebookAppId + '" data-max-rows="2" data-width="300"></div>'
        ].join(''));
    },

    login: function() {
        Ext.Viewport.setMasked(false);
        var splash = Ext.getCmp('login');
        if (!splash) {
            Ext.Viewport.add({ xclass: 'tripgang.view.login.LoginMain', id: 'login' });
        }
        this.showLoginTextFB();
    },

    onLogin: function() {

        var me = this,
            errTitle;

        FB.api('/me', function(response) {

            if (response.error) {
                FB.logout();

                errTitle = "Facebook " + response.error.type + " error";
                Ext.Msg.alert(errTitle, response.error.message, function() {
                    me.login();
                });
            } else {
                tripgang.userData = response;
                if (!me.main) {
                    me.main = Ext.create('tripgang.view.Main', {
                        id: 'main'
                    });
                }
                Ext.Viewport.setActiveItem(me.main);
            }
        });
    },
});
