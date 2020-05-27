//#region Events
$("#loginForm").submit(function (e) {
    e.preventDefault();
    let form = $(this);
    let url = form.attr('action');
    let data = form.serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: data, // serializes the  form's elements.
        success: function (data) {
            alert(data); // show response from the php script.
        }
    });
});
//#endregion