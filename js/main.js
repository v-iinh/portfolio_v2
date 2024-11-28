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
    $grid.fadeIn(500);
    $apps.fadeIn(500);
    $info.fadeIn(500);
    $noise.fadeIn(500);
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
        $window.fadeIn(300).css("transform", "scale(1)").draggable({
            handle: ".window-header",
            containment: "parent",
        }).resizable({
            containment: "parent",
            minHeight: 200,
            minWidth: 400,
            resize: function () {
                checkOverflow($window);
            },
        });
        checkOverflow($window);
    });

    $window.find(".close-explorer").on("click", function () {
        $window.fadeOut(300).css("transform", "scale(0.8)");
    });
}

handleWindow($(".trash"), $(".trash-explorer"));
handleWindow($(".about"), $(".about-explorer"));
handleWindow($(".work"), $(".work-explorer"));