function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function () {
    setEqualHeight($(".revcards>.col-md-4>.card"));
    $('span.navbar-toggle').click(function (e) {
        $(this).toggleClass('active');
        $('.head').toggle();
        e.stopPropagation();
    });
    $('body').click(function () {
        var link = $('span.navbar-toggle');
        if (link.hasClass('active')) {
            link.click();
        }
    });
});