$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(config.preferences["Feed"], "", function(data, textStatus, jqXHR) {
      console.log(data);
      var randomIndex = get_random(data);
      $("#current").text(data[0][6]);
      $("#current-room").text(data[0][7]);
      $("#current-with").text(data[0][8]);
      $("#current-start").text(data[0][4]);
      $("#current-end").text(data[0][8]);
      $("#first").text(data[1][6]);
      $("#first-time").text(data[1][4] + " - " + data[1][8]);
      $("#first-day").text(data[1][9]);
      $("#second").text(data[2][6]);
      $("#second-time").text(data[2][4] + " - " + data[2][8]);
      $("#second-day").text(data[2][9]);
      $("#third").text(data[3][6]);
      $("#third-time").text(data[3][4] + " - " + data[3][8]);
      $("#thid-day").text(data[3][9]);
    });
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
