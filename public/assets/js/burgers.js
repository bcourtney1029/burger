$(function() {
    $(".devourBurger").on("click", (event) => {
        var id = $(this).data("id");
        var devoured = $(this).data("eaten");

        var eatBurger = {
            "devoured": devoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatBurger
        }).then(
            function() {
                console.log("Changed devoured to", eatBurger);
                location.reload();
            }
        );
    });

    $("#addBurger").on("submit", (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
        }
        console.table(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger!");
            location.reload();
        });
    });

});