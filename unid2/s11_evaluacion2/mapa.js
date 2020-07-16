var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -71.6033302, lng: -16.3499524 },
        zoom: 15
    });
}