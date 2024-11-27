sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.mercadolibre.fps.interco.masterdata.exemptions',
            componentId: 'ExemptionsObjectPage',
            contextPath: '/Exemptions'
        },
        CustomPageDefinitions
    );
});