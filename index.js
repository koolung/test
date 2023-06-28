    /* updating headcover option per the measurement input */
    function updateDropdown() {
      var depthInput = parseFloat(document.getElementById("depthInput").value);
      var widthInput = parseFloat(document.getElementById("widthInput").value);
      var heightInput = parseFloat(document.getElementById("heightInput").value);
      var controlOption = document.getElementById("controlOptionDropdown").value;

      var menuOptions = document.getElementById("menuOptions");
      menuOptions.innerHTML = ""; // Clear previous options

      //check if the depth measurement is below 2 inches
      if(depthInput < 2){
        showDepthDiv();
      } else{
        dontShowDepthDiv();
      }

      //check if the motorized option is selected
      if (controlOption === "option3"){
          if(depthInput > 3.4 && heightInput < 98.42 && heightInput > 13.77 && widthInput > 15.74 && widthInput < 98.42){
              addOption("3.4'' cover");
          }
      } 
      //if it isn't motorized, then do normal 3.4 cover check
      else if (depthInput > 3.4 && heightInput < 157.48 && widthInput > 11.81 && widthInput < 98.42) {
              addOption("3.4'' cover");
          
      }
      // check 2.6 cover option
      if (depthInput < 2.6 || heightInput > 70.86 || widthInput < 11.81 || widthInput > 98.42) {
          // '2.6'' cover' option is not available
      } else {
          addOption("2.6'' cover");
      }

      //check if the motorized option is selected
      if (controlOption === "option3"){
          if(depthInput > 2.3 && heightInput < 98.42 && widthInput > 15.74 && widthInput < 98.42){
              addOption("Girder");
          }
      } 
      //check if the cordless option is selected
      else if (controlOption === "option2"){
          if(depthInput > 2 && heightInput < 70.86 && widthInput > 23.62 && widthInput < 78.74){
              addOption("Girder");
          }
      } 
      //if it isn't motorized nor cordless, then just add girder
      else{
          if(depthInput)
          addOption("Girder");
      }

      if (depthInput < 2.4 || heightInput > 196.85 || widthInput < 11.81 || widthInput > 98.42) {
          // 'Exposed' option is not available
      } else {
          addOption("Exposed");
      }

      displayOptions();
  }

  // adds option to the <select>
  function addOption(optionText) {
      var menuOptions = document.getElementById("menuOptions");
      var option = document.createElement("option");
      option.text = optionText;
      menuOptions.add(option);
  }
    /* End updating headcover option per the measurement input */
    
  
    /* listen to control option choice and show options */
    function displayOptions() {

      
      var firstDropdown = document.getElementById("controlOptionDropdown");
      var selectedOption = firstDropdown.value;
      var optionsContainer = document.getElementById("optionsContainer");
      optionsContainer.innerHTML = "";
      var cordPositionContainer = document.getElementById("cordPositionContainer");
      cordPositionContainer.innerHTML = "";

      // Hide all divs initially
      var cordDiv = document.getElementById("cordDiv");
      var cordlessDiv = document.getElementById("cordlessDiv");
      var motorizedDiv = document.getElementById("motorizedDiv");
      cordDiv.style.display = "none";
      cordlessDiv.style.display = "none";
      motorizedDiv.style.display = "none";

      if (selectedOption === "option1") {
        //show cord operation description
        cordDiv.style.display = "block";

        //show cord position options
        var cordPositions = [
         'Choose Cord Position',
         'left',
         'right'
       ];

      

       var cordPositionDropdown = document.createElement("select");
        for (var i = 0; i < cordPositions.length; i++) {
          var cordPosition = document.createElement("option");
          cordPosition.text = cordPositions[i];
         cordPositionDropdown.add(cordPosition);
        }

        cordPositionContainer.appendChild(cordPositionDropdown);

      } else if (selectedOption === "option2") {
         //show cordless opeariton descripton
         cordlessDiv.style.display = "block";

      } else if (selectedOption === "option3") {
         //show mortorized operation description
         motorizedDiv.style.display = "block";

      }
    }
    /* end listen to control option choice and show options */

    /* listen to depth measurement input and show details */
    function showDepthDiv() {

    // Hide all divs initially
    var depthDiv = document.getElementById("depthDiv");

    // Show the selected div based on the selected value
    depthDiv.style.display = "block";
  }

    function dontShowDepthDiv() {

      // Hide all divs initially
      var depthDiv = document.getElementById("depthDiv");

      // hide the selected div based on the selected value
      depthDiv.style.display = "none";
    }
 /* end listen to depth measurement input and show details */

   /* listen to mount type choice and show options */
   function showSelectedDiv() {
      var selectElement = document.getElementById("mountType");
      var selectedValue = selectElement.value;

      // Hide all divs initially
      var insideMountDiv = document.getElementById("insideMountDiv");
      var outsideMountDiv = document.getElementById("outsideMountDiv");
      insideMountDiv.style.display = "none";
      outsideMountDiv.style.display = "none";

      // Show the selected div based on the selected value
      if (selectedValue === "insideMount") {
        insideMountDiv.style.display = "block";
      } else if (selectedValue === "outsideMount") {
        outsideMountDiv.style.display = "block";
      }
    }
   /* end listen to mount type choice and show options */

    /* enable input */
    function enableInput(first, second) {
      var firstInput = first;
      var secondInput = second;

      if (firstInput.value !== "") {
        secondInput.disabled = false;
      } else {
        secondInput.disabled = true;
      }
    }
    /*end enable input */