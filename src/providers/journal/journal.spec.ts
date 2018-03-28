import { Observable } from 'rxjs';
import { JournalProvider } from './journal';

// import journalRespJson from '../../mocks/data/journalResp.json';
// import transformedJournalJson from '../../mocks/data/transformedJournal.json';

const journalRespJson = {
  message: 'Success',
  data: {
    testSlots: [
      {
        details: {
          success: false,
          route: 8,
          showMe: 6,
          tellMe: 11
        },
        slot: {
          _slotId: 1001,
          start: '2018-03-05T08:10:00+00:00',
          duration: 57,
          vehicleSlotType: 'B57mins',
          _testCentreId: 54321,
          testCentreName: 'Example Test Centre'
        },
        booking: {
          candidate: {
            _candidateId: 100,
            candidateName: {
              title: 'Miss',
              firstName: 'Chris',
              secondName: 'Bbb',
              thirdName: 'Ccc',
              lastName: 'Nappin'
            },
            driverNumber: 'AAAAA123456A78AA',
            gender: 'Female',
            candidateAddress: {
              line1: '1 Some Street',
              line2: 'Some place',
              line3: 'Some area',
              line4: 'Some town',
              line5: 'Some county',
              postcode: 'AA1 2BB'
            },
            primaryTelephone: '01234 567890',
            secondaryTelephone: '04321 098765',
            mobileTelephone: '07654 123456',
            email: 'aaaa@bbbb.com',
            prn: 11223344,
            previousADITests: 2
          },
          application: {
            _applicationId: '384 392 293 22',
            _bookingSequence: '03',
            _checkDigits: '01',
            welshTest: false,
            extendedTest: true,
            meetingPlace: 'Some meeting place',
            progressiveAccess: false,
            specialNeeds: 'Heavily pregnant',
            checkMarker: false,
            vehicleSeats: 5,
            vehicleHeight: 1.75,
            vehicleWidth: 2.5,
            vehicleLength: 5.5,
            testCategory: 'B+E'
          },
          previousCancellations: ['Act of nature', 'DVSA', 'DSA'],
          business: {
            _id: 1000,
            name: "Dave's Dodgy Driving Instructors",
            businessAddress: {
              line1: 'Flat 1A',
              line2: '1 Example Street',
              line3: 'Example Area',
              line4: 'Example Town',
              line5: 'Example County',
              postcode: 'AB12 3CD'
            },
            telephone: '07890 654321'
          }
        }
      },
      {
        details: {
          success: true,
          route: 9,
          showMe: 3,
          tellMe: 8
        },
        slot: {
          _slotId: 1002,
          start: '2018-03-05T09:07:00+00:00',
          duration: 30,
          _testCentreId: 54321,
          testCentreName: 'Example Test Centre'
        },
        booking: {
          candidate: {
            _candidateId: 100,
            candidateName: {
              title: 'Miss',
              firstName: 'Kamil',
              secondName: 'Bbb',
              thirdName: 'Ccc',
              lastName: 'Zeilinski'
            },
            driverNumber: 'AAAAA123456A78AA',
            gender: 'Female',
            candidateAddress: {
              line1: '1 Some Street',
              line2: 'Some place',
              line3: 'Some area',
              line4: 'Some town',
              line5: 'Some county',
              postcode: 'AA1 2BB'
            },
            primaryTelephone: '01234 567890',
            secondaryTelephone: '04321 098765',
            mobileTelephone: '07654 123456',
            email: 'aaaa@bbbb.com',
            prn: 11223344,
            previousADITests: 2
          },
          application: {
            _applicationId: '384 392 293 22',
            _bookingSequence: '03',
            _checkDigits: '01',
            welshTest: false,
            extendedTest: true,
            progressiveAccess: false,
            checkMarker: false
          }
        }
      },
      {
        slot: {
          _slotId: 1003,
          start: '2018-03-05T10:14:00+00:00',
          duration: 90,
          vehicleSlotType: 'Voc90mins',
          _testCentreId: 54321,
          testCentreName: 'Example Test Centre'
        },
        booking: {
          candidate: {
            _candidateId: 100,
            candidateName: {
              title: 'Miss',
              firstName: 'Matthew',
              secondName: 'Bbb',
              thirdName: 'Ccc',
              lastName: 'Murry'
            },
            driverNumber: 'AAAAA123456A78AA',
            gender: 'Female',
            candidateAddress: {
              line1: '1 Some Street',
              line2: 'Some place',
              line3: 'Some area',
              line4: 'Some town',
              line5: 'Some county',
              postcode: 'AA1 2BB'
            },
            primaryTelephone: '01234 567890',
            secondaryTelephone: '04321 098765',
            mobileTelephone: '07654 123456',
            email: 'aaaa@bbbb.com',
            prn: 11223344,
            previousADITests: 2
          },
          application: {
            _applicationId: '384 392 293 22',
            _bookingSequence: '01',
            _checkDigits: '06',
            welshTest: false,
            extendedTest: true,
            progressiveAccess: false,
            checkMarker: false
          }
        }
      }
    ]
  }
};

const transformedJournalJson = [
  {
    appId: '384 392 293 22',
    candidateId: 100,
    candidateName: {
      title: 'Miss',
      firstName: 'Chris',
      secondName: 'Bbb',
      thirdName: 'Ccc',
      lastName: 'Nappin'
    },
    checkMarker: false,
    details: {
      success: false,
      route: 8,
      showMe: 6,
      tellMe: 11
    },
    startTime: '__TIME__',
    testCentreName: 'Example Test Centre'
  },
  {
    appId: '384 392 293 22',
    candidateId: 100,
    candidateName: {
      title: 'Miss',
      firstName: 'Kamil',
      secondName: 'Bbb',
      thirdName: 'Ccc',
      lastName: 'Zeilinski'
    },
    checkMarker: false,
    details: {
      success: true,
      route: 9,
      showMe: 3,
      tellMe: 8
    },
    startTime: '__TIME__',
    testCentreName: 'Example Test Centre'
  },
  {
    appId: '384 392 293 22',
    candidateId: 100,
    candidateName: {
      title: 'Miss',
      firstName: 'Matthew',
      secondName: 'Bbb',
      thirdName: 'Ccc',
      lastName: 'Murry'
    },
    checkMarker: false,
    startTime: '__TIME__',
    testCentreName: 'Example Test Centre'
  }
];

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
