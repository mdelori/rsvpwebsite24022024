<!DOCTYPE html>
<html>

<head>
  <!-- Include the Typeform Embed SDK -->
  <script src="https://embed.typeform.com/embed.js"></script>
</head>

<body>
  <!-- Add a div element to hold the Typeform -->
  <div id="typeform-container"></div>

  <script>
    // Fetch the correct Typeform URL from the public Google Sheet based on the viewer's name
    function fetchTypeformURL(viewerFirstName, viewerLastName) {
      // Replace with the URL of your public Google Sheet
      var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1vCJuhUV5EIJ3CdgYkIap_i75_n5EWCxQ5-_O7dn4u1E/gviz/tq?tqx=out:csv";

      // Make a request to the Google Sheet using fetch
      fetch(googleSheetUrl)
        .then(response => response.text())
        .then(data => {
          // Process the data to find the Typeform URL based on viewerName
          var typeformURL = findTypeformURL(data, viewerFirstName, viewerLastName);

          // Embed the Typeform on the website if a URL is found
          if (typeformURL) {
            // Use the fetched Typeform URL to embed the Typeform
            var typeformEmbedUrl = typeformURL;

            // Create a Typeform object with the URL
            const typeform = new Typeform.createWidget(typeformEmbedUrl, {
              container: document.getElementById('typeform-container')
            });

            // Select the submit button using the data-testid attribute
            const submitButton = document.querySelector('[data-testid="stylablebutton-label"]');

            // Add a click event listener to the button
            submitButton.addEventListener('click', () => {
              typeform.open();
            });
          } else {
            // Handle cases where the viewer's name doesn't match any mappings
            // Display an error message or a generic form in this case
          }
        })
        .catch(error => {
          console.error("Error fetching Google Sheet data:", error);
          // Handle errors here, e.g., display an error message to the user
        });
    }

