$( document ).ready(function() {
  $(".oval").each(function() {
    if (parseInt($(this).data("col-index")) == 0) {
      $(this).css("margin-left", "30%");
    }
  });
  $(".oval, .oval-dark").click(function() {
    let index = parseInt($(this).data("col-index"));
    if ($(this).data("direction") == "right") {
      $(this).parent().children().each(function() {
        $(this).css("margin", "0");
        let oval_index = parseInt($(this).data("col-index"));
        if (oval_index > index) {
          $(this).data("direction", "right");
        } else {
          $(this).data("direction", "left");
        }
      });
      $(this).css("margin-right", "30%");
    } else if ($(this).data("direction") == "left") {
      $(this).parent().children().each(function() {
        $(this).css("margin", "0");
        let oval_index = parseInt($(this).data("col-index"));
        if (oval_index < index) {
          $(this).data("direction", "left");
        } else {
          $(this).data("direction", "right");
        }
      });
      $(this).css("margin-left", "30%");
    }
  });
});
