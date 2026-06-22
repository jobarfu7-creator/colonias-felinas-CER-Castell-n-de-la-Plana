var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ColoniasFelinasCERCastelln_1 = new ol.format.GeoJSON();
var features_ColoniasFelinasCERCastelln_1 = format_ColoniasFelinasCERCastelln_1.readFeatures(json_ColoniasFelinasCERCastelln_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColoniasFelinasCERCastelln_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColoniasFelinasCERCastelln_1.addFeatures(features_ColoniasFelinasCERCastelln_1);
var lyr_ColoniasFelinasCERCastelln_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColoniasFelinasCERCastelln_1, 
                style: style_ColoniasFelinasCERCastelln_1,
                popuplayertitle: 'Colonias Felinas CER Castellón',
                interactive: true,
                title: '<img src="styles/legend/ColoniasFelinasCERCastelln_1.png" /> Colonias Felinas CER Castellón'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ColoniasFelinasCERCastelln_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ColoniasFelinasCERCastelln_1];
lyr_ColoniasFelinasCERCastelln_1.set('fieldAliases', {'Protectora': 'Protectora', 'Colonia': 'Colonia', 'N_gatos': 'N_gatos', 'Esterilizados': 'Esterilizados', 'No_esterilizados': 'No_esterilizados', 'Porcentaje_CER': 'Porcentaje_CER', 'Estado_CER': 'Estado_CER', 'Privado': 'Privado', });
lyr_ColoniasFelinasCERCastelln_1.set('fieldImages', {'Protectora': 'TextEdit', 'Colonia': 'TextEdit', 'N_gatos': 'Range', 'Esterilizados': 'Range', 'No_esterilizados': 'TextEdit', 'Porcentaje_CER': 'TextEdit', 'Estado_CER': 'TextEdit', 'Privado': 'TextEdit', });
lyr_ColoniasFelinasCERCastelln_1.set('fieldLabels', {'Protectora': 'inline label - visible with data', 'Colonia': 'inline label - visible with data', 'N_gatos': 'inline label - visible with data', 'Esterilizados': 'inline label - visible with data', 'No_esterilizados': 'inline label - visible with data', 'Porcentaje_CER': 'inline label - visible with data', 'Estado_CER': 'inline label - visible with data', 'Privado': 'inline label - visible with data', });
lyr_ColoniasFelinasCERCastelln_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});