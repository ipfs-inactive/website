$(function() {
    i18n.init({
        lngWhiteList: ['it'],
        fallbackLng: false,
        resGetPath: BaseURL + '/locale/website-%{lng}.json',
        interpolationPrefix: '%{',
        interpolationSuffix: '}',
        keyseparator: false,
        nsseparator: false
    }, function(t) {
        $(document).prop("title", i18n.t($(document).prop("title")));
        $("span.i18n").each(function(index, element) {
            $(element).html(i18n.t($(element).html()));
        });   
        $("div.markdown").each(function(index, element) {
            $(element).html(marked($(element).html()));
        });
    });
});
