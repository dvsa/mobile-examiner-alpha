import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJournal, IJournalResp } from './journal-model';
import { DateTimeUtility } from '../../shared/utils/datetime';
import 'rxjs/Rx';

/*
  Generated class for the JournalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JournalProvider {
  journalResp: IJournalResp;

  private apiUrl: string = 'assets/data/journal-data.json';

  constructor(private httpClient: HttpClient, private dateTimeUtil: DateTimeUtility) {}

  transformSlotData(slots) {
    return slots.reduce((curr: IJournal[], next) => {
      const {
        details,
        slot: { testCentreName = '', start = '' },
        booking: {
          candidate: { candidateName = '', _candidateId: candidateId = 0 },
          application: { checkMarker = false, _applicationId: appId = '' }
        }
      } = next;

      let journalEntry = <IJournal>{
        candidateId,
        candidateName,
        appId,
        testCentreName,
        checkMarker,
        startTime: this.dateTimeUtil.getTime(start)
      };

      if (details) {
        journalEntry = { ...journalEntry, details };
      }

      return curr.concat(journalEntry);
    }, []);
  }

  getData(email: string) {
    return this.httpClient.get<IJournalResp>(this.apiUrl).map(res => {
      const { testSlots } = res.data;
      return this.transformSlotData(testSlots);
    });
  }
}
