var $room = $(".room");
var $desktop = $(".desktop");
var $apps = $(".apps");
var $info = $(".info");
var $grid = $(".screenGrid");
var $noise = $(".noise");
var $monitor = $(".monitor");
var $shutdown = $(".shutdown");

$monitor.on("click", function () {
    $(".fa-hand-o-down").fadeOut(1000);
    $desktop.show();
    $room.addClass("zoom-out");
    $grid.fadeIn(0);
    $apps.fadeIn(0);
    $info.fadeIn(0);
    $noise.fadeIn(0);
    $desktop.addClass("zoom");
});


$shutdown.on("click", function () {
    $(".explorer-window").fadeOut(500);
    $desktop.removeClass("zoom");
    $room.removeClass("zoom-out");
    $apps.fadeOut(500);
    $info.fadeOut(500);
    $noise.fadeOut(500);
    $grid.fadeOut(500);
});

function handleWindow($trigger, $window) {
    $trigger.on("click", function () {
        
        $window.fadeIn(0).css("transform", "scale(1)").focus();
        $window.draggable({
            handle: ".window-header",
            containment: "parent",
        }).resizable({
            containment: "parent",
            minHeight: 200,
            minWidth: 400,
        });
    });

    $window.on("focus", function () {
        $(".explorer-window").css("zIndex", 1);
        $window.css("zIndex", 2);
    });

    $window.find(".close-explorer").on("click", function () {
        $window.fadeOut(300).css("transform", "scale(0.8)");
    });
}

handleWindow($(".about"), $(".about-explorer"));
handleWindow($(".projects"), $(".projects-explorer"));
handleWindow($(".contact"), $(".contact-explorer"));
handleWindow($(".trash"), $(".trash-explorer"));