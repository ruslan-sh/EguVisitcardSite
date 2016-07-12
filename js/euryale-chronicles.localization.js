$('#selectLanguageDropdown').localizationTool({
    'defaultLanguage' : 'ru_RU', /* (optional) although must be defined if you don't want en_GB */
    'showFlag': true,            /* (optional) show/hide the flag */
    'showCountry': false,         /* (optional) show/hide the country name */
    'showLanguage': false,        /* (optional) show/hide the country language */
    /*
     * Translate your strings below
     */
    'strings' : {
        'element:title' : {
            'en_GB' : 'EG Union - Euryale Chronicles'
        },
    }

});

$('.ltool-language.en_GB').click(function() {	
    window.location.href = "euryale-chronicles-en.html"
});
