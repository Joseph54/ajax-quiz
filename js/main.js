//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {
        //Make the AJAX call
        $.ajax('http://api.tvmaze.com/search/shows?q=:query', {
            method: "GET",
            dataType: "json"
        })
        //After the data comes back, use this function
            .done(
                function (data) {
                    //Add the name
                    $('#name').append(data.name);
                    //Add the episodes
                    data._embedded.episodes.forEach(function (episode) {
                        $('#episodeList').append('<tr>'+
                            '<td>' + episode.season + '</td>' +
                            '<td>' + episode.number + '</td>' +
                            '<td>' + episode.name + '</td>' +
                            '<td>' + episode.summary + '</td>' +
                            +' </tr>')
            })
        })
    },
    $(#submit-btn).click(function(e) {
        e.preventDefault();
        var search_show =

    }

)
