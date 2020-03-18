jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"AviationUI/AviationPRO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"AviationUI/AviationPRO/test/integration/pages/App",
	"AviationUI/AviationPRO/test/integration/pages/Browser",
	"AviationUI/AviationPRO/test/integration/pages/Master",
	"AviationUI/AviationPRO/test/integration/pages/Detail",
	"AviationUI/AviationPRO/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "AviationUI.AviationPRO.view."
	});

	sap.ui.require([
		"AviationUI/AviationPRO/test/integration/NavigationJourneyPhone",
		"AviationUI/AviationPRO/test/integration/NotFoundJourneyPhone",
		"AviationUI/AviationPRO/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});