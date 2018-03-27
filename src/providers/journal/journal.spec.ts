import { Observable } from 'rxjs';
import { JournalProvider } from './journal';

import journalRespJson from '../../mocks/data/journalResp.json';
import transformedJournalJson from '../../mocks/data/transformedJournal.json';

describe('PROVIDER: journal - ', () => {
  let provider: JournalProvider;
  const httpMock = {
    get: jest.fn(() => Observable.of(journalRespJson))
  };

  const dateTimeUtilMock = {
    getTime: jest.fn(() => '__TIME__')
  };

  beforeEach(() => {
    provider = new JournalProvider(httpMock as any, dateTimeUtilMock);
  });

  it(' should return a some journal slots', () => {
    provider.getData('email').subscribe(slots => {
      expect(slots.length).toBe(3);
      expect(slots[0].details.success).toBeFalsy();
      expect(slots[0].candidateName.firstName).toBe('Chris');
      expect(slots[2].details).toBeUndefined();
    });
  });

  it(' should transform response data', () => {
    const transformedData = provider.transformSlotData(journalRespJson.data.testSlots);

    expect(transformedData.length).toBe(3);
    expect(transformedData[0]).toEqual(transformedJournalJson[0]);
    expect(transformedData[1]).toEqual(transformedJournalJson[1]);
    expect(transformedData[2]).toEqual(transformedJournalJson[2]);
  });
});
