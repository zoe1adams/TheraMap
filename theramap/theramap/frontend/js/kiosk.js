// kiosk.js

// Initialize map when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  initMap();
});

// Function to initialize the Google Map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 40.7128, lng: -74.0060 }, // Default: New York City
  });

  // Kiosk locations
  const kiosks = [
    { lat: 40.712776, lng: -74.005974, title: "Downtown Health Center", id: 1 },
    { lat: 40.730610, lng: -73.935242, title: "Community Wellness Hub", id: 2 },
    { lat: 40.7580, lng: -73.9855, title: "Midtown Service Kiosk", id: 3 },
    { lat: 40.748817, lng: -73.985428, title: "Tech Hub Kiosk", id: 4 },
  ];

  // Place markers on the map for each kiosk location
  kiosks.forEach(kiosk => {
    const marker = new google.maps.Marker({
      position: { lat: kiosk.lat, lng: kiosk.lng },
      map: map,
      title: kiosk.title,
    });

    // Add a click event to display information about the kiosk
    marker.addListener("click", () => {
      displayKioskInfo(kiosk);
    });
  });
}

// Function to display kiosk details on the webpage when clicked
function displayKioskInfo(kiosk) {
  const kioskDetails = document.getElementById("kiosk-details");
  kioskDetails.innerHTML = `
    <h3>${kiosk.title}</h3>
    <p>Location: ${kiosk.lat}, ${kiosk.lng}</p>
    <p><strong>Operating Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
    <p><a href="#">Book Appointment</a> | <a href="#">Contact Support</a></p>
  `;
}
