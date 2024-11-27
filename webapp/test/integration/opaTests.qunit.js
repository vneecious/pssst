sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mercadolibre/fps/interco/masterdata/exemptions/test/integration/FirstJourney',
		'com/mercadolibre/fps/interco/masterdata/exemptions/test/integration/pages/ExemptionsList',
		'com/mercadolibre/fps/interco/masterdata/exemptions/test/integration/pages/ExemptionsObjectPage',
		'com/mercadolibre/fps/interco/masterdata/exemptions/test/integration/pages/ExemptionsRulesObjectPage'
    ],
    function(JourneyRunner, opaJourney, ExemptionsList, ExemptionsObjectPage, ExemptionsRulesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mercadolibre/fps/interco/masterdata/exemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheExemptionsList: ExemptionsList,
					onTheExemptionsObjectPage: ExemptionsObjectPage,
					onTheExemptionsRulesObjectPage: ExemptionsRulesObjectPage
                }
            },
            opaJourney.run
        );
    }
);