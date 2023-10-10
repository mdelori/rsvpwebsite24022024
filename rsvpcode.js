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
        // Use the appropriate method to embed the Typeform

        // Select the submit button using the data-testid attribute
        const submitButton = document.querySelector('[data-testid="stylablebutton-label"]');

        // Add a click event listener to the button
        submitButton.addEventListener('click', () => {
          // Your code to handle the button click event
          // You can embed the Typeform here
          // Example: document.location.href = typeformEmbedUrl;
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

// Function to find the Typeform URL based on viewerName
function findTypeformURL(data, viewerFirstName, viewerLastName) {
  // Implement your logic to parse the data and search for the Typeform URL
  // You'll need to split the data into rows and cells and match viewerFirstName and viewerLastName to the correct URL
  // Return the URL if a match is found, or null if no match is found
  // Example logic:
  var rows = data.split("\n");
  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].split(",");
    var sheetFirstName = cells[0]; // First name from the sheet (first column)
    var sheetLastName = cells[1]; // Last name from the sheet (second column)
    var sheetTypeformURL = cells[2]; // Typeform URL from the sheet (third column)
    
    if (sheetFirstName === viewerFirstName && sheetLastName === viewerLastName) {
      return sheetTypeformURL;
    }
  }
  return null; // Return null if no match is found
}

// Call the function to fetch the Typeform URL based on viewer's first name and last name
var viewerFirstName = "John"; // Replace with the viewer's first name
var viewerLastName = "Doe";   // Replace with the viewer's last name
fetchTypeformURL(viewerFirstName, viewerLastName);
