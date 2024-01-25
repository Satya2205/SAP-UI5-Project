/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "shellplugin/project1/model/models",
        "sap/m/MessageBox",
	    "sap/m/MessageToast"
    ],
    function (UIComponent, Device, models,MessageBox,MessageToast) {
        "use strict";

        return UIComponent.extend("shellplugin.project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                MessageBox.success("Project 1234567 was created and assigned to team \"ABC\".");
            }
        });
    }
);