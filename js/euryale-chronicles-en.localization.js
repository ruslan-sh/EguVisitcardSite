$('#selectLanguageDropdown').localizationTool({
    'defaultLanguage' : 'en_GB', /* (optional) although must be defined if you don't want en_GB */
    'showFlag': true,            /* (optional) show/hide the flag */
    'showCountry': false,         /* (optional) show/hide the country name */
    'showLanguage': false,        /* (optional) show/hide the country language */
    /*
     * Translate your strings below
     */
    'strings' : {
        'element:title' : {
            'ru_RU' : 'EG Union - Хроники Эвриалы'
        },
    }

});

$('.ltool-language.ru_RU').click(function() {	
    window.location.href = "euryale-chronicles.html"
});
