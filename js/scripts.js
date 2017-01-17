$(function(){
  $("form#transportation-survey").submit(function(event){

    $("input:checkbox[name=transportation-work]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#result-work").append(workTransportationMode + "<br>");
    });

    $("input:checkbox[name=transportation-private]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#result-private").append(workTransportationMode + "<br>");
    })
    $("#transportation-survey").hide();
    $("#result-work").show();
    $("#result-private").show();
    event.preventDefault();
  });
});
