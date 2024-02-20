export var colors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#2ecc71",
  "#e74c3c",
  "#f39c12",
  "#9b59b6",
  "#1abc9c",
  "#d35400",
  "#3498db",
  "#2ecc71",
  "#16a085",
  "#2980b9",
  "#e74c3c",
  "#c0392b",
  "#f39c12",
  "#d35400",
  "#34495e",
  "#ecf0f1",
  "#bdc3c7",
  "#7f8c8d"
];

function generateHoverColor(hexColor) {
  // Convert hex to RGB
  var rgb = hexColor.match(/\w\w/g).map(function (hex) {
    return parseInt(hex, 16);
  });

  // Adjust lightness for hover effect
  rgb = rgb.map(function (value) {
    return Math.min(255, value + 25); // You can adjust the value to make it lighter or darker
  });

  // Convert RGB to hex
  var hoverHex = "#" + rgb.map(function (value) {
    return ('0' + value.toString(16)).slice(-2);
  }).join('').toUpperCase();

  return hoverHex;
}

// Generate hover colors for each original color
export var hoverColors = colors.map(function (color) {
  return generateHoverColor(color);
});


