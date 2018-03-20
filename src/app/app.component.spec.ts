import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { App } from './app.component';
import { LoginPage } from '../pages/login/login';

describe('App', () => {

  let fixture: ComponentFixture<App>;
  let component: App;

  const platformStub = {
    ready: jest.fn().mockResolvedValue('ready')
  };
  const statusBarStub = {
    styleDefault: jest.fn()
  };
  const splashScreenStub = {
    hide: jest.fn()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        App
      ],
      providers: [
        { provide: Platform, useValue: platformStub },
        { provide: StatusBar, useValue: statusBarStub },
        { provide: SplashScreen, useValue: splashScreenStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;

    jest.spyOn(platformStub, 'ready');
    jest.spyOn(statusBarStub, 'styleDefault');
    jest.spyOn(splashScreenStub, 'hide');
  });

  it('should create the App component', () => {
    expect(component).toBeDefined();
  });

  it('should have LoginPage as the root page', () => {
    expect(component.rootPage).toBe(LoginPage);
  });

  it('should call the styleDefault method on statusBar', () => {
    expect(platformStub.ready).toBeCalled();
    expect(statusBarStub.styleDefault).toBeCalled();
  });

  it('should call the hide method on splashScreen', () => {
    expect(splashScreenStub.hide).toBeCalled();
  });

});
