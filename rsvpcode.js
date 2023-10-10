// Get the viewer's first name from the Wix form
var viewerFirstName = $w("#input_comp-lnkq57u7").value; // Use the provided element ID for the first name input

// Get the viewer's last name from the Wix form
var viewerLastName = $w("#input_comp-lnkq648f").value; // Use the provided element ID for the last name input

// Combine first name and last name (customize this based on your needs)
var viewerName = viewerFirstName + " " + viewerLastName;

// Fetch the correct Typeform URL from the public Google Sheet based on the viewer's name
function fetchTypeformURL(viewerName) {
  // Replace with the URL of your public Google Sheet
  var googleSheetUrl = "https://docs.google.com/spreadsheets/d/1vCJuhUV5EIJ3CdgYkIap_i75_n5EWCxQ5-_O7dn4u1E/gviz/tq?tqx=out:csv";

  // Make a request to the Google Sheet using fetch
  fetch(googleSheetUrl)
    .then(response => response.text())
    .then(data => {
      // Process the data to find the Typeform URL based on viewerName
      var typeformURL = findTypeformURL(data, viewerName);

      // Embed the Typeform on the website if a URL is found
      if (typeformURL) {
        // Use the fetched Typeform URL to embed the Typeform
        var typeformEmbedUrl = typeformURL;
        // Use the appropriate method to embed the Typeform
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
function findTypeformURL(data, viewerName) {
  // Implement your logic to parse the data and search for the Typeform URL
  // You'll need to split the data into rows and cells and match viewerName to the correct URL
  // Return the URL if a match is found, or null if no match is found
  // Example logic:
  var rows = data.split("\n");
  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].split(",");
    var sheetViewerName = cells[0] + " " + cells[1]; // Combine first and last name from the sheet
    if (sheetViewerName === viewerName) {
      return cells[2]; // Assuming the Typeform URL is in the third column
    }
  }
  return null; // Return null if no match is found
}

// Call the function to fetch the Typeform URL based on viewerName
fetchTypeformURL(viewerName);
