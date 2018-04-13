import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'weather-selector',
  templateUrl: 'weather-selector.html'
})
export class WeatherSelectorComponent {
  selectedWeather: string = '';
  weatherConditions: object[] = [
    { label: 'Bright roads', value: 'brightRoads' },
    { label: 'Wet roads', value: 'WetRoads' },
    { label: 'Dull Roads', value: 'dullRoads' },
    { label: 'Dry Roads', value: 'dryRoads' },
    { label: 'Raining Through Test', value: 'raining' },
    { label: 'Snowing', value: 'snow' },
    { label: 'Showers', value: 'showers' },
    { label: 'Icy', value: 'icy' },
    { label: 'Foggy/Misty', value: 'fog' },
    { label: 'Windy', value: 'wind' }
  ];

  constructor(private viewCtrl: ViewController) {}

  updateWeatherConditions(id: string, isChecked: boolean) {
    return this.weatherConditions.map((condition: any) => {
      if (condition.value === id) {
        condition.checked = isChecked;
      }
      return condition;
    });
  }

  setWeatherSummary() {
    return this.weatherConditions
      .reduce((conditions: any, curr: any) => {
        if (curr.checked === true) {
          conditions.push(curr.label);
        }
        return conditions;
      }, [])
      .join(', ');
  }

  setWeather(event: any) {
    const { checked: isChecked, id } = event.target;

    this.weatherConditions = this.updateWeatherConditions(id, isChecked);
    this.selectedWeather = this.setWeatherSummary();
  }

  cancelWeather() {
    this.selectedWeather = '';
    this.viewCtrl.dismiss();
  }

  submitWeather() {
    this.viewCtrl.dismiss(this.selectedWeather);
  }
}
