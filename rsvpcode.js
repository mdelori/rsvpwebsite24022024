// Get the viewer's first name from the Wix form
var viewerFirstName = $w("#viewerFirstNameInput").value; // Replace "viewerFirstNameInput" with the actual Wix element ID for the first name input

// Get the viewer's last name from the Wix form
var viewerLastName = $w("#Last Name").value; // Replace "Last Name" with the actual Wix element ID for the last name input

// Combine first name and last name (you can customize this based on your needs)
var viewerName = viewerFirstName + " " + viewerLastName;

// Define mappings of names to Typeform IDs
var typeformMappings = {
  "John Doe": "typeformID1", // Replace "John Doe" with the name as it appears in your Google Sheet
  "Jane Smith": "typeformID2", // Replace "Jane Smith" with another name
  // Add more mappings for your guests
};

// Determine the Typeform ID to embed based on the viewer's name
var typeformID = typeformMappings[viewerName];

// Embed the Typeform on the website (same as previously explained)
if (typeformID) {
  var typeformEmbedUrl = "https://form.typeform.com/to/" + typeformID;
  // Use the appropriate method to embed the Typeform
} else {
  // Handle cases where the viewer's name doesn't match any mappings
  // Display an error message or a generic form in this case
}
