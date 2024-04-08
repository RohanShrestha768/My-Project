$(document).ready(function () {
    function saveData(item) {
        localStorage.setItem("data", item.html());
    }

    function showData() {
        $(".list-container").html(localStorage.getItem("data"));
    }
  $(".btn").click(() => {
    let display = $("#input-box").val();
    
   
    if (display === "") {
      alert("Input cannot be empty");
    } else {
        let span = $("<span>\u00d7</span>").addClass("remove");   
        let listItem = $("<li></li>").text(display).append(span);
        $(".list-container").append(listItem);
  
        $("#input-box").val("");
        saveData($(".list-container"));
      
            $('.remove').on("click",function (e) {
                $(this).closest("li").remove(); 
                saveData($('.list-container'));
            });
            
    }
 
       
  });

  $(".list-container").on("click", "li", function (e) {
    $(this).toggleClass("checked");
  });
  showData();
 
});
