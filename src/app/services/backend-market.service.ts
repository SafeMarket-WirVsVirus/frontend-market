import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BranchUIModel, BranchUIModelInterface, BranchUtilization } from './ui-models/branch-ui-model';
import * as uuid from 'uuid';

export interface MarketResponse {
  success?: boolean;
  error?: Error;
}

@Injectable({
  providedIn: 'root'
})
export class BackendMarketService {

  constructor() { }

  public storeBranch(branch: BranchUIModelInterface): Observable<MarketResponse> {
    console.log(branch);
    // TODO: Actual store operation
    if (branch.hasOwnProperty('id') && branch.id !== undefined) {
      // Put update
      // TODO: Mock
      const marketIndex = mockedBranches.findIndex((market) => market.id === branch.id);
      mockedBranches[marketIndex] = branch;
    } else {
      // Post new
      // TODO: Mock
      branch.id = uuid.v4();
      mockedBranches.push(branch);
    }

    return of({success: true});
  }

  public getBranches(): Observable<BranchUIModelInterface[]> {
    // TODO: Mockdata
    return of(mockedBranches);
  }

  public deleteBranch(id): Observable<MarketResponse> {
    // TODO: Mock
    const marketIndex = mockedBranches.findIndex((market) => market.id === id);
    mockedBranches.splice(marketIndex, 1);

    return of({success: true});
  }
}

const mockedBranches: BranchUIModelInterface[] = [
  new BranchUIModel({
    id: '0',
    name: 'REWE Göttingen',
    clerkCount: 5,
    maxUtilization: 80,
    currentUtilization: 70,
    maxReservations: 10,
    maxDuration: 15,
    utilization: BranchUtilization.High,
    address: {
      street: 'This street 5',
      postcode: '12345'
    },
    openingTimes: {
      monday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      tuesday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      wednesday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      thursday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      friday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      saturday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      sunday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ]
    }
  }),
  new BranchUIModel({
    id: '1',
    name: 'REWE Göt. Süd',
    clerkCount: 5,
    maxUtilization: 60,
    currentUtilization: 30,
    maxReservations: 10,
    maxDuration: 15,
    utilization: BranchUtilization.Medium,
    address: {
      street: 'This street 5',
      postcode: '12345'
    },
    openingTimes: {
      monday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ],
      tuesday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ],
      wednesday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ],
      thursday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ],
      friday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ],
      saturday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ],
      sunday: [
        {
          from: '08:30',
          to: '13:30'
        },
        {
          from: '14:30',
          to: '20:30'
        }
      ]
    }
  }),
  new BranchUIModel({
    id: '3',
    name: 'REWE Neustatt',
    clerkCount: 5,
    maxUtilization: 30,
    currentUtilization: 5,
    maxReservations: 10,
    maxDuration: 15,
    utilization: BranchUtilization.Low,
    address: {
      street: 'This street 5',
      postcode: '12345'
    },
    openingTimes: {
      monday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      tuesday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      wednesday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      thursday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      friday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      saturday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ],
      sunday: [
        {
          from: '08:30',
          to: '20:30'
        }
      ]
    }
  }),
]