sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.mercadolibre.fps.interco.masterdata.exemptions',
            componentId: 'ExemptionsList',
            contextPath: '/Exemptions'
        },
        CustomPageDefinitions
    );
});