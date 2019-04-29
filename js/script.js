// import { MOCK } from "./mock.js";
var availableTypes = [];
var availableColors = [];
var selectedTypes = [];
var selectedColors = [];
var data;

function loadFurniture(showError, availableColors, availableTypes, showData, showFilter, attachListeners){

  $.get(`https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`).then(function(response){
  if(response.body.data.length > 0){
    data = response.body.data;
    console.log(data.length);
    showData(data, true, "", selectedTypes, selectedColors, true, "");
    showFilter();
    attachListeners();
  }

}).fail(function(error){
  showError(error);
});

}

function showData(dataArray, all, searchName, selectedTypes, selectedColors, deliverable, stock){
  var strHTML = "";
  var show = true;
  if(dataArray.length > 0){
    //console.log(dataArray);
    for(let i=0; i < dataArray.length; i++)
    {
      var show = true;
      let item = dataArray[i];
      //console.log(data);
      if ((!all) && (searchName != "") && (!((item.name.toUpperCase().includes(searchName.toUpperCase()) || item.id.toUpperCase().includes(searchName.toUpperCase())))))
        show = false;

      let colors = [];
      var hasColors = false;
      for(let j = 0; j < item.colors.length; j++)
      {
        if((all) && (!availableColors.includes(item.colors[j])))
          availableColors.push(item.colors[j]);
        if((!all) && (selectedColors.includes(item.colors[j])))
        {
          hasColors = true;
          break;
        }
      }

      if((all) && (!availableTypes.includes(item.type)))
        availableTypes.push(item.type);

      if((!all) && (stock != "") && (parseInt(item.stock) > parseInt(stock)))
        show = false;

      if((!all) && !((selectedTypes.includes(item.type)) && (hasColors) && (deliverable == item.deliverable)))
        show = false;

      if ((all) || (!all && show))
      {
        strHTML += "<div class='item' id='item" + i + "'>";
        strHTML += "<img src='" + item.imageUrl + "' alt='a picture of " + item.name + "'>";

        strHTML += "<p>ID: " + item.id + "<br>";
        strHTML += "Type: " + item.type + "<br>";
        strHTML += "<span";
        if(item.stock == "0"){
          strHTML += " class='warning'";
        }
        strHTML += ">Stock: " + item.stock + "</span>";
        strHTML += "</p>";
        strHTML += "<p>" + item.name + " <span class='type'>" + item.type + "</span></p><p>$" + item.cost + "</p>";

        strHTML += "<p>";
        for(var k=0; k< item.colors.length; k++){
          strHTML += "<input style='background-color:" + item.colors[k] + ";width:25px;heigth:25px;border: 1px solid darkgrey;'>  </input>";
        }
        // strHTML += "</p><div class='details'><p>" + item.description;
        strHTML += "</p></div>";
        strHTML += "</div>"; //class=item
      }
    }
  }
    $(".grid").html(strHTML);
}

function attachListeners()
{
  $(".grid").on("click", "div", function(){
  //  console.log(this);
    if(this.id.indexOf("item") != -1){
      var i = parseInt(this.id.substring(4));
      showItem(i);
      $(".itemDetails, .itemContent").addClass("active");
    }
  });

  $(".itemDetails").on("click", function(){
    $(".itemDetails, .itemContent").removeClass("active");
  });

  $(".types input[type='checkbox']").change(function(){
    filterTypes($(this).val());
  });

  $(".colors input[type='checkbox']").change(function(){
    filterColors($(this).val());
  });
}

function showItem(index)
{
  //var item = MOCK.body.data[index];
  var item = data[index];

  var strHTML = "";
  strHTML += "<img src='" + item.imageUrl + "' alt='a picture of " + item.name + "'>";
  strHTML += "<p>ID: " + item.id + "<br>";
  strHTML += "Type: " + item.type + "<br>";
  strHTML += "<span";
  if(item.stock == "0"){
    strHTML += " class='warning'";
  }
  strHTML += ">Stock: " + item.stock + "</span>";
  strHTML += "</p>";

  strHTML += "<p>" + item.name + "</p><p>$" + item.cost + "</p>";

  if(item.deliverable == false){
    strHTML += "<p class='warning'>Not deliverable</p>";
  }
  if(item.dimensions){
    strHTML += "<p>" + item.dimensions.length + " x " +item.dimensions.width + " sq.ft.</p>";
  }

  strHTML += "<div><p>" + item.description;
  strHTML += "</p>";
  for(var i=0; i< item.colors.length; i++){
    strHTML += "<input style='background-color:" + item.colors[i] + ";width:25px;heigth:25px;border: 1px solid darkgrey;'>  </input>"}
  strHTML += "</div>";

  $(".addDetails").html(strHTML);
}

function filterColors(color){
  if(selectedColors.includes(color)){
    selectedColors.splice(selectedColors.indexOf(color), 1);
  }
  else{
    selectedColors.push(color);
  }
}

function filterTypes(furnitureType){
  if(selectedTypes.includes(furnitureType)){
    selectedTypes.splice(selectedTypes.indexOf(furnitureType), 1);
  }
  else{
    selectedTypes.push(furnitureType);
  }
}

function showError(error){
  $(".errors").text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  $(".errors").show();
}

function showFilter(){
  selectedTypes = [];
  selectedColors = [];

  var strHTML = "";

  if(availableTypes.length > 0){
    strHTML += "<div class='types'><br><label>Types</label><br>";
    for(var i=0; i < availableTypes.length; i++){
      strHTML += "<input type='checkbox' name='type' value='" + availableTypes[i] + "' checked> " + availableTypes[i] + "<br>";
      selectedTypes.push(availableTypes[i]);
    }
    strHTML += "</div>";
  }
  if(availableColors.length > 0){
    strHTML += "<div class='colors'><br><label>Colors</label><br>";
    for(var i=0; i < availableColors.length; i++){
      strHTML += "<input type='checkbox' name='color' value='" + availableColors[i] + "' checked> " + availableColors[i] + "<br>";
      selectedColors.push(availableColors[i]);
    }
    strHTML += "</div>";
  }

  $(".dynamicFilter").html(strHTML);
}

$(document).ready(function(){
    loadFurniture(showError, availableColors, availableTypes, showData, showFilter, attachListeners);
    // showData(MOCK.body.data, true, "", selectedTypes, selectedColors, true, "");
    // showFilter();
    // attachListeners();

  $("#search").click(function(){
    var searchName = $('#searchName').val();
    var deliverable = $("#deliverable").prop("checked");
    var stock = $("#stock").val();
    //showData(MOCK.body.data, false, $("#searchName").val(), selectedTypes, selectedColors, $("#deliverable").prop("checked"), $("#stock").val());
    showData(data, false, $("#searchName").val(), selectedTypes, selectedColors, $("#deliverable").prop("checked"), $("#stock").val());
  });

  $("#clear").click(function(){
    selectedTypes = [];
    selectedIndex = [];
    $("#deliverable").prop("checked", true);
    $("#searchName").val("");
    $("#stock").val("");
    loadFurniture(showError, availableColors, availableTypes, showData, showFilter, attachListeners);
    // showData(MOCK.body.data, true, "", selectedTypes, selectedColors, true, "");
    // showFilter();
  });

});
