$(function() {
    var $room = $(".room");
    var $desktop = $(".desktop");
    var $apps = $(".apps");
    var $login = $(".login-overlay");
    var $grid = $(".screenGrid");
    var $wallpaper = $(".wallpaper");
    var $info = $(".info");
    var $gif = $(".room-gif");
    var $wrap = $('.interactive-wrap');
    var $monitor = $(".monitor");
    var $noise = $(".noise");
    var resize = false;

    $apps.hide()
    $login.hide()
    $info.hide()
    $wallpaper.hide()

    $monitor.on("click", function() {
        var $this = $(this);
        $(".fa-hand-o-down").fadeOut(1000)
        $desktop.show()
        $room.addClass("zoom-out");
        $grid.fadeIn(500)
        $apps.fadeIn(500)
        $info.fadeIn(500)
        $noise.fadeIn(500)
        $desktop.addClass("zoom")
    });

    function resizeRoom() {
        if (!window.jqueryResizeActive && detectIE()) {
            $room.css("height", window.innerHeight);
            $room.css("width", window.innerWidth);

            if ($room[0].clientHeight > window.innerHeight) {
                $gif.addClass("overflow");
            }
            else {
                $gif.removeClass("overflow");
            }

            $wrap.css("width", $gif.width());
            $wrap.css("height", $gif.height());
        }
    }

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    resizeRoom();

    if (detectIE()) {
        $(".room").addClass("ie")
        resizeRoom();
    }
    else {
        $(".room-gif").addClass("scale-me")
        $(".monitor-svg").addClass("scale-me")
    }

    $(window).bind('resize', function() {
        resizeRoom();
    });
})

$(window).on("load", function() {
    setTimeout(function() {
        $(".logo-overlay").fadeOut(1500)
        $(".tcf-logo").addClass("fade-out")
        $(".page-state").removeClass("pulse").fadeOut(1000)
    }, 1000)
})
$(function() {
	var $folders = $(".fa-folder").parent();
	var $room = $(".room");
	var $screen = $(".screen");
	var $logo = $(".logo");
	var $logoMenu = $(".logo-menu");
	var $shutdown = $('.shutdown');
	var $monitor = $(".monitor");
	var $login = $(".login");
	var $loginOverlay = $(".login-overlay");
	var $close = $(".close-explorer");
	var $apps = $(".apps");
    var $login = $(".login-overlay");
    var $wallpaper = $(".wallpaper");
    var $info = $(".info");
    var $grid = $(".screenGrid");
    var $send = $(".contact-submit");
    var $noise = $(".noise");

	var $trash = $(".trash");
	var $trashExplorer = $(".explorer-window.trash-explorer");

	var $about = $(".about");
	var $aboutExplorer = $(".explorer-window.about-explorer");

	var $work = $(".work");
	var $workExplorer = $(".explorer-window.work-explorer");

	var $contact = $(".contact");
	var $contactExplorer = $(".explorer-window.contact-explorer");

	var $awards = $(".fa-trophy");
	var $awardsExplorer = $(".explorer-window.awards-explorer");

	function bindExplorer($explorer) {
		$explorer.addClass("visible")
		$explorer.fadeIn()
		$explorer.focus()
		$explorer.css("transform", "scale(1)");

		$explorer.draggable({
			handle: ".window-header",
			containment: "parent",
			minHeight: 50,
			start: function() {
				$explorer.focus()
			}
		});

		if (!$explorer.hasClass("spotify-explorer")) {
			$explorer.resizable({
				containment: "parent",
				minHeight: 400,
				minWidth: 500,
				start: function() {
					window.jqueryResizeActive = true;
				},
				resize: function() {
					if ($(this).hasClass("work-explorer")) {
						checkWorkApps($explorer);
					}
					if ($(this).hasClass("awards-explorer")) {
						checkAwardsApps($explorer);
					}
					checkExplorerFlex()
				},
				stop: function() {
					window.jqueryResizeActive = false;
				}
			});
		}

		checkExplorerFlex()
	}

	function checkExplorerFlex($explorer) {
		$(".explorer-window").each(function() {
			if ($(this).hasClass("visible")) {
				var $windowBody = $(this).find(".window-body");
				var height = $windowBody[0].clientHeight
				var scrollHeight = $windowBody[0].scrollHeight

				if (scrollHeight > height) {
					$windowBody.addClass("block-override");
				}
				else {
					$windowBody.removeClass("block-override");
				}
			}
		})
	}

	function unbindExplorer($explorer) {
		$explorer.removeClass("visible")
		$explorer.css("transform", "scale(0.8)");
		$explorer.fadeOut(500);
		$explorer.draggable("destroy");

		if (!$explorer.hasClass("spotify-explorer")) {
			$explorer.resizable("destroy");
		}
	}

	function checkWorkApps($explorer) {
		var $items = $(".work-item");

		if ($explorer.width() > 600 && $explorer.width() < 800) {
			$items.css('width', 'calc(50% - 30px)')
		}
		else if ($explorer.width() > 800 && $explorer.width() < 1200) {
			$items.css('width', 'calc(33.33% - 30px)')
		}
		else if ($explorer.width() > 1200) {
			$items.css('width', 'calc(20% - 30px)')
		}
	}

	function checkAwardsApps($explorer) {
		var $items = $(".award-item");

		if ($explorer.width() > 600 && $explorer.width() < 800) {
			$items.css('width', 'calc(50% - 30px)')
		}
		else if ($explorer.width() > 800 && $explorer.width() < 1200) {
			$items.css('width', 'calc(33.33% - 30px)')
		}
		else if ($explorer.width() > 1200) {
			$items.css('width', 'calc(20% - 30px)')
		}
	}

	$trash.on("click", function() {
		bindExplorer($trashExplorer);
	})

	$about.on("click", function() {
		bindExplorer($aboutExplorer);
	}) 

	$work.on("click", function() {
		checkWorkApps($workExplorer);
		bindExplorer($workExplorer);
	}) 

	$awards.on("click", function() {
		checkAwardsApps($awardsExplorer);
		bindExplorer($awardsExplorer);
	}) 

	$close.on("click", function() {
		var $explorer = $(this).parents(".explorer-window");
		unbindExplorer($explorer)
	})

	$logo.on("click", function() {
		if ($logoMenu.hasClass("open")) {
			$logoMenu.animate({left: "-200px"});
			$logoMenu.removeClass("open");
		}
		else {
			$logoMenu.animate({left: "5"});
			$logoMenu.addClass("open");
		}
	})

	$shutdown.on("click", function() {
		var delay = 0;

		$(".explorer-window").each(function() {
			if ($(this).hasClass("visible")) {
				unbindExplorer($(this))
				delay = 500;
			}
		})

		setTimeout(function() {
			$screen.removeClass("zoom");
			$room.removeClass("zoom-out");
	        $apps.fadeOut(500)
	        $info.fadeOut(500)
	        $noise.fadeOut(500)
	        $grid.fadeOut(500, function() {
	        	$screen.hide()
	        })
        }, delay)
	})

	$login.on("click", function() {
		$loginOverlay.addClass("zoom");
		$loginOverlay.fadeOut(500);
		$apps.fadeIn()
	    $info.fadeIn()
	});

	$(window).on("resize", function() {
		checkExplorerFlex()
	})
})
$(function() {
	var $time = $(".time");
	var $date = $(".date");
	var months = [
		"jan", 
		"feb", 
		"mar", 
		"apr", 
		"may", 
		"jun", 
		"jul", 
		"aug", 
		"sep", 
		"oct", 
		"nov", 
		"dec"
	];
	
	function updateDateTime() {
		var dateTimeObj = String(new Date()).split(" ");
		var day = dateTimeObj[2];
		var month = getMonthIndex(dateTimeObj[1]);
		var year = dateTimeObj[3];
		var date = month + "/" + day + "/" + year;
		setDate(date);
		setTime(dateTimeObj[4]);
	}

	function getMonthIndex(txt) {
		month = txt.toLowerCase();
	    return months.indexOf(month) + 1;
	}

	function setTime(str) {
		var time = str.split(":");
		var minute = time[1];
		var second = time[2];
		var ampm = time[0] >= 12 ? " PM" : " AM";
		var hour = time[0] % 12;

		if (hour == 0) { hour = 12 };

		$time.html(hour + ":" + minute + ":" + second + ampm);
	}

	function setDate(str) {
		$date.html(str);
	}

	setInterval(function() {
		updateDateTime()	
	}, 1000);

	updateDateTime()
})
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-118887921-1');