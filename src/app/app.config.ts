import { ApplicationConfig, importProvidersFrom, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule, provideClientHydration } from '@angular/platform-browser';
import 'hammerjs'

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withComponentInputBinding()), 
    provideHttpClient(withFetch()),
    importProvidersFrom(HammerModule),
    provideRouter(routes)
  ]
};
