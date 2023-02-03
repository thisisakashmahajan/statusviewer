function load() {
    let id = $("#project_id").val();
    let updated = false;
    $.getJSON('data.json', function (data) {
        $.each(data.project, function(i, project) {
            if(data.project[i].project_id == id) {
                updated = true;
                $("#project_status").html("<b>" + data.project[i].status + "</b>");
            }
        });
        if (updated == false) {
            $("#project_status").html("<b>I don't know this project ID. Try again!</b>");
        }
    });
}