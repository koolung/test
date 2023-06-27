    /* listen to control option choice and show options */
    function displayOptions() {

      updateOptions();
      
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


        //show head cover options
        var options = [
          'Choose Head Cover Type',
          '3.4 cover',
          '2.6 cover',
          '3.4 motorized cover',  
          'cordless girder',
          'exposed',
          'motorized girder'
        ];

        var secondDropdown = document.createElement("select");
        for (var i = 0; i < options.length; i++) {
          var option = document.createElement("option");
          option.text = options[i];
          secondDropdown.add(option);
        }

        optionsContainer.appendChild(secondDropdown);
      } else if (selectedOption === "option2") {
         //show cordless opeariton descripton
         cordlessDiv.style.display = "block";

         var options = [
            'Choose Head Cover Type',
            '3.4 cover',
            '2.6 cover',
            '3.4 motorized cover',  
            'cordless girder',
            'exposed',
            'motorized girder'
          ];
  
          var secondDropdown = document.createElement("select");
          for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i];
            secondDropdown.add(option);
          }
  
          optionsContainer.appendChild(secondDropdown);
      } else if (selectedOption === "option3") {
         //show mortorized operation description
         motorizedDiv.style.display = "block";

         var options = [
            'Choose Head Cover Type',
            '3.4 cover',
            'girder',
            'exposed'
          ];
  
          var secondDropdown = document.createElement("select");
          for (var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i];
            secondDropdown.add(option);
          }
  
          optionsContainer.appendChild(secondDropdown);
      }
    }
    /* end listen to control option choice and show options */


   /* head cover logic function */
   function updateOptions() {
      // Retrieve input values and selected option
      var depthInput = document.getElementById("depthInput").value;
      var heightInput = document.getElementById("heightInput").value;
      var widthInput = document.getElementById("widthInput").value;
      var selectedOption = document.getElementById("controlOptionDropdown").value;

      // Hide all options initially
      var option1 = document.getElementById("option1");
      var option2 = document.getElementById("option2");
      var option3 = document.getElementById("option3");
      var option4 = document.getElementById("option4");
      option1.style.display = "none";
      option2.style.display = "none";
      option3.style.display = "none";
      option4.style.display = "none";

      // Show options based on conditions
      if (
        depthInput <= 3.4 && heightInput >= 13.77 && heightInput <= 98.42 &&
        widthInput >= 15.74 && widthInput <= 98.42 &&
        selectedOption === "option3"
      ) {
        option1.style.display = "block";
      }

      if (
        depthInput <= 2.6 && heightInput <= 70.86 &&
        widthInput >= 11.81 && widthInput <= 98.42
      ) {
        option2.style.display = "block";
      }

      if (
        depthInput <= 2.3 && heightInput <= 98.42 && heightInput >= 13.77 &&
        widthInput >= 15.74 && widthInput <= 98.42 &&
        selectedOption === "option3"
      ) {
        option3.style.display = "block";
      }

      if (
        depthInput <= 2.4 && heightInput <= 196.85 &&
        widthInput >= 11.81 && widthInput <= 98.42
      ) {
        option4.style.display = "block";
      }
    }
   /* end head cover logic function */

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

    /* display cover options */
    function displayMeasurementOptions() {

      //measurement inputs into variables
      var width = parseInt(document.getElementById("widthInput").value);
      var height = parseInt(document.getElementById("heightInput").value);
      var depth = parseInt(document.getElementById("depthInput").value);

      var optionsContainer = document.getElementById("coverOptionsContainer");
      optionsContainer.innerHTML = "";

      if (height < 5) {
        var options = [
          '3.4 cover',
          '2.6 cover',
          '3.4 motorized cover',
          'cordless girder',
          'exposed',
          'motorized girder'
        ];

        var selectElement = document.createElement("select");
        for (var i = 0; i < options.length; i++) {
          var option = document.createElement("option");
          option.text = options[i];
          selectElement.add(option);
        }

        optionsContainer.appendChild(selectElement);
      } else if (height >= 5 && height <= 10) {
        var options = [
          'a','b','c','d'
        ];

        var selectElement = document.createElement("select");
        for (var i = 0; i < options.length; i++) {
          var option = document.createElement("option");
          option.text = options[i];
          selectElement.add(option);
        }

        
        optionsContainer.appendChild(selectElement);
      } else {
        alert
      }
    }
    /* end display cover options */