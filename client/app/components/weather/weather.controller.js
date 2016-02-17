class WeatherController {
  constructor(openWeatherApi) {
    'ngInject';
    let CHAPEL_HILL_ID = 4460162;
    this.title = 'Weather';
    this.service = openWeatherApi;
    this.cities = openWeatherApi.getCities();
    this.city = CHAPEL_HILL_ID;
    this.cityFullName = 'Chapel Hill, NC';
    this.loading = true;
    this.unitSystem = 'metric';
    this.reload();
  }

  reload() {
    var _this = this;
    _this.loading = true;
    this.service.getCurrentWeather(this.city, this.unitSystem)
      .then((response) => {
        _this.loading = false;
        this.weather = response.data.weather;
        this.mainWeather = response.data.main;
        this.wind = response.data.wind;
        this.rain = response.data.rain;
      });
  }

  getImageSource() {
    return this.service.getImageSource(this.weather[0].icon);
  }
}

export default WeatherController;
