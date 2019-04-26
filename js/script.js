// import { MOCK } from "./mock.js";
var availableTypes = [];
var availableColors = [];
var selectedTypes = [];
var selectedColors = [];

function loadFurniture(showError, availableColors, availableTypes){
  console.log(1);
  $.get(`https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`).then(function(response){
  if(response.body.data.length > 0){
    let data;
    console.log(response.body.data);
    for(let i=0; i < response.body.data.length; i++)
    {
      data = response.body.data[i];
      console.log(data);
      var colors = [];
      for(j = 0; j < data.colors.length; j++)
      {
        if(!availableColors.includes(data.colors[j]))
          availableColors.push(data.colors[j]);

        colors.push();
      }
    }
  }

}).fail(function(error){
  showError(error);
});

}

function showData(dataArray, all, searchName, selectedTypes, selectedColors, deliverable, stock){
  var strHTML = "";
  var show = true;
  if(dataArray.length > 0){
    console.log(dataArray);
    for(let i=0; i < dataArray.length; i++)
    {
      var show = true;
      let data = dataArray[i];
      console.log(data);
      if ((!all) && (searchName != "") && (!data.name.toUpperCase().includes(searchName.toUpperCase())))
        show = false;

      let colors = [];
      var hasColors = false;
      for(let j = 0; j < data.colors.length; j++)
      {
        if((all) && (!availableColors.includes(data.colors[j])))
          availableColors.push(data.colors[j]);
        if((!all) && (selectedColors.includes(data.colors[j])))
        {
          hasColors = true;
          break;
        }
      }

      if((all) && (!availableTypes.includes(data.type)))
        availableTypes.push(data.type);


      if((!all) && (stock != "") && (parseInt(data.stock) > parseInt(stock)))
        show = false;

      if((!all) && ((!selectedTypes.includes(data.type)) || (!hasColors) || (deliverable != data.deliverable)))
        show = false;

      if ((all) || (!all && show))
      {
        strHTML += "<div class='item' id='item" + i + "'>";
        strHTML += "<img src='" + data.imageUrl + "' alt='a picture of " + data.name + "'>";

        strHTML += "<p>ID: " + data.id + "<br>";
        strHTML += "Type: " + data.type + "<br>";
        strHTML += "<span";
        if(data.stock == "0"){
          strHTML += " class='warning'";
        }
        strHTML += ">Stock: " + data.stock + "</span>";
        strHTML += "</p>";
        strHTML += "<p>" + data.name + " <span class='type'>" + data.type + "</span></p><p>$" + data.cost + "</p>";


        strHTML += "<p>";
        for(var k=0; k< data.colors.length; k++){
          strHTML += "<input style='background-color:" + data.colors[k] + ";width:25px;heigth:25px;border: 1px solid darkgrey;'>  </input>";
        }
        // strHTML += "</p><div class='details'><p>" + data.description;
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
    console.log(this);
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
    console.log($(this));
    filterTypes($(this).val());
  });

  $(".colors input[type='checkbox']").change(function(){
    console.log($(this));
    filterColors($(this).val());
  });
}

function showItem(index)
{
  var data = MOCK.body.data[index];
  var strHTML = "";
  strHTML += "<img src='" + data.imageUrl + "' alt='a picture of " + data.name + "'>";
  strHTML += "<p>ID: " + data.id + "<br>";
  strHTML += "Type: " + data.type + "<br>";
  strHTML += "<span";
  if(data.stock == "0"){
    strHTML += " class='warning'";
  }
  strHTML += ">Stock: " + data.stock + "</span>";
  strHTML += "</p>";

  strHTML += "<p>" + data.name + "</p><p>$" + data.cost + "</p>";
  // if(data.stock == "0"){
  //   strHTML += "<p class='warning'>Out of stock</p>";
  // }
  if(data.deliverable == false){
    strHTML += "<p class='warning'>Not deliverable</p>";
  }
  if(data.dimensions){
    strHTML += "<p>" + data.dimensions.length + " x " +data.dimensions.width + " sq.ft.</p>";
  }

  strHTML += "<div><p>" + data.description;
  strHTML += "</p>";
  for(var i=0; i< data.colors.length; i++){
    strHTML += "<input style='background-color:" + data.colors[i] + ";width:25px;heigth:25px;border: 1px solid darkgrey;'>  </input>"}
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
    showData(MOCK.body.data, true, "", selectedTypes, selectedColors, true, "");
    showFilter();
    attachListeners();
  //  getFurniture(showError);
  // })
  $("#search").click(function(){
    var searchName = $('#searchName').val();
    var deliverable = $("#deliverable").prop("checked");
    var stock = $("#stock").val();
    showData(MOCK.body.data, false, $("#searchName").val(), selectedTypes, selectedColors, $("#deliverable").prop("checked"), $("#stock").val());
  });

  $("#clear").click(function(){
    selectedTypes = [];
    selectedIndex = [];
    $("#deliverable").checked = true;
    $("#searchName").val("");
    $("#stock").val("");
    showData(MOCK.body.data, true, "", selectedTypes, selectedColors, true, "");
    showFilter();
  });

});
