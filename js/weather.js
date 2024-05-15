// weather.js
function howsTheWeather(temperature) {
    if (temperature < 40) {
      return "It's brisk out there!";
    } else if (temperature <= 65) {
      return "It's a little chilly out there!";
    } else if (temperature > 85) {
      return "It's too dang hot out there!";
    } else {
      return "It's perfect out there!";
    }
  }
  