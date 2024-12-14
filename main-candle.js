$(document).ready(function () {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();

                // Show the new message
                txt.hide().html("ur wish will come true (bc i said so)").delay(750).fadeIn(300);

                // Animate the candle fading
                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );

                // Add 'visible' class to make the button fade in
                $("#navigateButton").delay(1000).queue(function (next) {
                    $(this).addClass("visible");
                    next();
                });
            }
        });
    });
});
