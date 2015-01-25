/* Style Switcher */
window.console = window.console || (function($){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();

$(document).ready(function($){

    var styleswitcherstr = ' \
    <h2>Style Switcher <a href="#"></a></h2> \
      <div class="content"> \
      <div class="clear"></div> \
      <h3>Change Theme</h3> \
      <div class="themes"> \
      <a id="super_hero" class="styleswitch color" title="Super Hero">Default</a> \
      <a id="dark" class="styleswitch color">Dark</a> \
      <a id="light" class="styleswitch color">Light</a> \
      </div> \
      <div class="clear"></div> \
      <h3>Change Color</h3> \
      <div class="colors"> \
      <a id="turquoise" class="styleswitch color" title="Turquoise"></a> \
      <a id="green_sea" class="styleswitch color" title="Green Sea"></a> \
      <a id="sun_flower" class="styleswitch color" title="Sun Flower"></a> \
      <a id="orange" class="styleswitch color" title="Orange"></a> \
      <a id="emerald" class="styleswitch color" title="Emerald"></a> \
      <a id="nephritis" class="styleswitch color" title="Nephritis"></a> \
      <a id="carrot" class="styleswitch color" title="Carrot"></a> \
      <a id="pumpkin" class="styleswitch color" title="Pumpkin"></a> \
      <a id="peter_river" class="styleswitch color" title="Peter River"></a> \
      <a id="belize_hole" class="styleswitch color" title="Belize Hole"></a> \
      <a id="alizarin" class="styleswitch color" title="Alizarin"></a> \
      <a id="pomegranate" class="styleswitch color" title="Pomegranate"></a> \
      <a id="amethyst" class="styleswitch color" title="Amethyst"></a> \
      <a id="wisteria" class="styleswitch color" title="Wisteria"></a> \
      <a id="silver" class="styleswitch color" title="Silver"></a> \
      <a id="concrete" class="styleswitch color" title="Concrete"></a> \
      </div> \
      </div><!-- End switcher-box --> \
      <div class="clear"></div> \
      </div><!-- End content --> \
    ';

    $(".switcher").prepend(styleswitcherstr);

});


/* Colors Style */
$(document).ready(function($){

    var cookieName = 'default';

    function changeTheme(theme) {
        $.cookie(cookieName, theme);
        if (theme == "all_components") {
            $('head link[data-name=themes]').attr('href', 'css/all_components.min.css');
            $('head link[data-name=colors]').attr('href', '');
            $.getScript('js/google_map.min.js', function() { });
        } else {
            $('head link[data-name=themes]').attr('href', 'css/colors/' + theme + '.min.css');
        }
        if ((theme == "dark") || (theme == "light")) {
            $('head link[data-name=colors]').attr('href', 'css/colors/turquoise.min.css');
            $.getScript('js/colors/google_map_turquoise.min.js', function() { });
        }
    }

    function changeColor(color) {
        $.cookie(cookieName, color);
        if (color == "all_components") {
            $('head link[data-name=colors]').attr('href', 'css/all_components.min.css');
        } else {
            $('head link[data-name=colors]').attr('href', 'css/colors/' + color + '.min.css');
            $.getScript('js/colors/google_map_' + color + '.min.js', function() { });
        }
    }

    if( $.cookie(cookieName)) {
        changeTheme($.cookie(cookieName));
    }
    $("#super_hero").click( function(){
        changeTheme('all_components');
        $(".content .themes a").removeClass("selected");
        $("#super_hero").addClass("selected");
        $(".content .colors a").removeClass("selected");
    });
    $("#dark").click( function(){
        changeTheme('dark');
        $(".content .themes a").removeClass("selected");
        $("#dark").addClass("selected");
        $(".content .colors a").removeClass("selected");
        $("#turquoise").addClass("selected");
    });
    $("#light").click( function(){
        changeTheme('light');
        $(".content .themes a").removeClass("selected");
        $("#light").addClass("selected");
        $(".content .colors a").removeClass("selected");
        $("#turquoise").addClass("selected");
    });

    if( $.cookie(cookieName)) {
        changeColor($.cookie(cookieName));
    }
    $("#turquoise").click( function(){
        changeColor('turquoise');
        $(".content .colors a").removeClass("selected");
        $("#turquoise").addClass("selected");
    });
    $("#green_sea").click( function(){
        changeColor('green_sea');
        $(".content .colors a").removeClass("selected");
        $("#green_sea").addClass("selected");
    });
    $("#sun_flower").click( function(){
        changeColor('sun_flower');
        $(".content .colors a").removeClass("selected");
        $("#sun_flower").addClass("selected");
    });
    $("#orange").click( function(){
        changeColor('orange');
        $(".content .colors a").removeClass("selected");
        $("#orange").addClass("selected");
    });
    $("#emerald").click( function(){
        changeColor('emerald');
        $(".content .colors a").removeClass("selected");
        $("#emerald").addClass("selected");
    });
    $("#nephritis").click( function(){
        changeColor('nephritis');
        $(".content .colors a").removeClass("selected");
        $("#nephritis").addClass("selected");
    });
    $("#carrot").click( function(){
        changeColor('carrot');
        $(".content .colors a").removeClass("selected");
        $("#carrot").addClass("selected");
    });
    $("#pumpkin").click( function(){
        changeColor('pumpkin');
        $(".content .colors a").removeClass("selected");
        $("#pumpkin").addClass("selected");
    });
    $("#peter_river").click( function(){
        changeColor('peter_river');
        $(".content .colors a").removeClass("selected");
        $("#peter_river").addClass("selected");
    });
    $("#belize_hole").click( function(){
        changeColor('belize_hole');
        $(".content .colors a").removeClass("selected");
        $("#belize_hole").addClass("selected");
    });
    $("#alizarin").click( function(){
        changeColor('alizarin');
        $(".content .colors a").removeClass("selected");
        $("#alizarin").addClass("selected");
    });
    $("#pomegranate").click( function(){
        changeColor('pomegranate');
        $(".content .colors a").removeClass("selected");
        $("#pomegranate").addClass("selected");
    });
    $("#amethyst").click( function(){
        changeColor('amethyst');
        $(".content .colors a").removeClass("selected");
        $("#amethyst").addClass("selected");
    });
    $("#wisteria").click( function(){
        changeColor('wisteria');
        $(".content .colors a").removeClass("selected");
        $("#wisteria").addClass("selected");
    });
    $("#silver").click( function(){
        changeColor('silver');
        $(".content .colors a").removeClass("selected");
        $("#silver").addClass("selected");
    });
    $("#concrete").click( function(){
        changeColor('concrete');
        $(".content .colors a").removeClass("selected");
        $("#concrete").addClass("selected");
    });

});

/* Reset Switcher */
$(document).ready(function(){

    // Style Switcher
    $('.switcher').animate({
        left: '-160px'
    });

    $('.switcher h2 a').click(function(e){
        e.preventDefault();
        var div = $('.switcher');
        console.log(div.css('left'));
        if (div.css('left') === '-160px') {
            $('.switcher').animate({
                left: '0px'
            });
        } else {
            $('.switcher').animate({
                left: '-160px'
            });
        }
    })

});
