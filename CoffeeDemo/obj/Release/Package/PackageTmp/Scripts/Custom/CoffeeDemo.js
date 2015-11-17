// For any drop down lists that have an empty value (i.e. "Select X...") remove that entry on change
$("select").change(function () {
    $("select option[value='']").remove();
});







