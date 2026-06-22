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
var format_se89_3_ambi_rnatur2000_a_x_20160430_1 = new ol.format.GeoJSON();
var features_se89_3_ambi_rnatur2000_a_x_20160430_1 = format_se89_3_ambi_rnatur2000_a_x_20160430_1.readFeatures(json_se89_3_ambi_rnatur2000_a_x_20160430_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_se89_3_ambi_rnatur2000_a_x_20160430_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_se89_3_ambi_rnatur2000_a_x_20160430_1.addFeatures(features_se89_3_ambi_rnatur2000_a_x_20160430_1);
var lyr_se89_3_ambi_rnatur2000_a_x_20160430_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_se89_3_ambi_rnatur2000_a_x_20160430_1, 
                style: style_se89_3_ambi_rnatur2000_a_x_20160430_1,
                popuplayertitle: 'se89_3_ambi_rnatur2000_a_x_20160430',
                interactive: true,
                title: '<img src="styles/legend/se89_3_ambi_rnatur2000_a_x_20160430_1.png" /> se89_3_ambi_rnatur2000_a_x_20160430'
            });
var format_ColoniasFelinasCERCastelln_2 = new ol.format.GeoJSON();
var features_ColoniasFelinasCERCastelln_2 = format_ColoniasFelinasCERCastelln_2.readFeatures(json_ColoniasFelinasCERCastelln_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColoniasFelinasCERCastelln_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColoniasFelinasCERCastelln_2.addFeatures(features_ColoniasFelinasCERCastelln_2);
var lyr_ColoniasFelinasCERCastelln_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColoniasFelinasCERCastelln_2, 
                style: style_ColoniasFelinasCERCastelln_2,
                popuplayertitle: 'Colonias Felinas CER Castellón',
                interactive: true,
                title: '<img src="styles/legend/ColoniasFelinasCERCastelln_2.png" /> Colonias Felinas CER Castellón'
            });

lyr_OSMStandard_0.setVisible(true);lyr_se89_3_ambi_rnatur2000_a_x_20160430_1.setVisible(true);lyr_ColoniasFelinasCERCastelln_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_se89_3_ambi_rnatur2000_a_x_20160430_1,lyr_ColoniasFelinasCERCastelln_2];
lyr_se89_3_ambi_rnatur2000_a_x_20160430_1.set('fieldAliases', {'objectid': 'objectid', 't_red': 't_red', 'id_zepa': 'id_zepa', 'id_lic': 'id_lic', 't_zepa': 't_zepa', 't_lic': 't_lic', 'rotulo': 'rotulo', 'fecha_alta': 'fecha_alta', 'fecha_baja': 'fecha_baja', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_ColoniasFelinasCERCastelln_2.set('fieldAliases', {'Protectora': 'Protectora', 'Colonia': 'Colonia', 'N_gatos': 'N_gatos', 'Esterilizados': 'Esterilizados', 'No_esterilizados': 'No_esterilizados', 'Porcentaje_CER': 'Porcentaje_CER', 'Estado_CER': 'Estado_CER', 'Privado': 'Privado', });
lyr_se89_3_ambi_rnatur2000_a_x_20160430_1.set('fieldImages', {'objectid': 'TextEdit', 't_red': 'TextEdit', 'id_zepa': 'TextEdit', 'id_lic': 'TextEdit', 't_zepa': 'TextEdit', 't_lic': 'TextEdit', 'rotulo': 'TextEdit', 'fecha_alta': 'DateTime', 'fecha_baja': 'DateTime', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_ColoniasFelinasCERCastelln_2.set('fieldImages', {'Protectora': 'TextEdit', 'Colonia': 'TextEdit', 'N_gatos': 'Range', 'Esterilizados': 'Range', 'No_esterilizados': 'TextEdit', 'Porcentaje_CER': 'TextEdit', 'Estado_CER': 'TextEdit', 'Privado': 'TextEdit', });
lyr_se89_3_ambi_rnatur2000_a_x_20160430_1.set('fieldLabels', {'objectid': 'no label', 't_red': 'no label', 'id_zepa': 'no label', 'id_lic': 'no label', 't_zepa': 'no label', 't_lic': 'no label', 'rotulo': 'no label', 'fecha_alta': 'no label', 'fecha_baja': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', });
lyr_ColoniasFelinasCERCastelln_2.set('fieldLabels', {'Protectora': 'inline label - visible with data', 'Colonia': 'inline label - visible with data', 'N_gatos': 'inline label - visible with data', 'Esterilizados': 'inline label - visible with data', 'No_esterilizados': 'inline label - visible with data', 'Porcentaje_CER': 'inline label - visible with data', 'Estado_CER': 'inline label - visible with data', 'Privado': 'inline label - visible with data', });
lyr_ColoniasFelinasCERCastelln_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});