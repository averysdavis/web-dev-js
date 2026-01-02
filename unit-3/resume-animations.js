$(document).ready(function () {
    //add hr after h2s

    //adding padding to all sections
    $("div").addClass("mx-3");

    //adding padding to titles
    $("h2").addClass("mx-1");

    //adding hr after sections
    $("section").after("<hr>");


    // Make sections collapsible
    $("section h2").each(function () {
        // Add clickable indicator (arrow) to each h2
        $(this).prepend('<span class="collapse-indicator">▼ </span>');
        $(this).addClass("collapsible-header");
    });

    // Add click handler to h2 elements to toggle section content
    $("section h2").click(function () {
        var $section = $(this).closest("section");
        var $content = $section.find("> div"); // Only direct child divs
        var $indicator = $(this).find(".collapse-indicator");

        // Check if content is currently visible before toggling
        var isVisible = $content.is(":visible");

        // Toggle the content
        $content.slideToggle(300);

        // Update the indicator arrow based on current state
        if (isVisible) {
            $indicator.text("▶ ");
        } else {
            $indicator.text("▼ ");
        }
    });

});