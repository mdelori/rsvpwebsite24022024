// Get the viewer's first name from the Wix form
var viewerFirstName = $w("#input_comp-lnkq57u7").value; // Use the provided element ID for the first name input

// Get the viewer's last name from the Wix form
var viewerLastName = $w("#input_comp-lnkq648f").value; // Use the provided element ID for the last name input

// Combine first name and last name (customize this based on your needs)
var viewerName = viewerFirstName + " " + viewerLastName;

// Fetch the correct Typeform URL from Google Sheets based on the viewer's name
// You'll need to use Google Sheets API or another method to retrieve this data

// Embed the Typeform on the website (same as previously explained)
if (typeformURL) {
  // Use the fetched Typeform URL to embed the Typeform
  var typeformEmbedUrl = typeformURL;
  // Use the appropriate method to embed the Typeform
} else {
  // Handle cases where the viewer's name doesn't match any mappings
  // Display an error message or a generic form in this case
}
