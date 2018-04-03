import { Injectable } from '@angular/core';

declare var process: any;

enum EnvVarKeys {
  JOURNAL_API_URL = 'JOURNAL_API_URL'
}

@Injectable()
export class AppConfigProvider {

  // Environment variables
  public journalApiUrl: string;

  // Client variables
  signaturePadOptions: any = {
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300,
    throttle: 0,
    backgroundColor: '#ffffff'
  };

  constructor() {
    this.journalApiUrl = this.readString(EnvVarKeys.JOURNAL_API_URL, 'assets/data/journal-data.json');
  }

  getJournalApiUrl(): string {
    return this.journalApiUrl;
  }

  getSignaturePadOptions() {
    return this.signaturePadOptions;
  }

  private readString(key: string, defaultValue?: string): string {
    const v = process.env[key];
    return typeof v === 'undefined' ? defaultValue : String(v);
  }

}
