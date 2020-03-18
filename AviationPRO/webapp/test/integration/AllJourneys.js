jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TravelProcessor in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"AviationUI/AviationPRO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"AviationUI/AviationPRO/test/integration/pages/App",
	"AviationUI/AviationPRO/test/integration/pages/Browser",
	"AviationUI/AviationPRO/test/integration/pages/Master",
	"AviationUI/AviationPRO/test/integration/pages/Detail",
	"AviationUI/AviationPRO/test/integration/pages/Create",
	"AviationUI/AviationPRO/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "AviationUI.AviationPRO.view."
	});

	sap.ui.require([
		"AviationUI/AviationPRO/test/integration/MasterJourney",
		"AviationUI/AviationPRO/test/integration/NavigationJourney",
		"AviationUI/AviationPRO/test/integration/NotFoundJourney",
		"AviationUI/AviationPRO/test/integration/BusyJourney",
		"AviationUI/AviationPRO/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});