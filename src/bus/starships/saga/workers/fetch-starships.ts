// Tools
import {
  startRequest, finishRequest, successRequest, failureRequest,
} from '../../index';

// Types
import { Starships, ErrorHttpAction } from '../../types';

// Workers
import { doRequest } from '../../../../workers';

// API

import { apiService } from '../../../../services';

export function* fetchStarships(): Generator {
  const options = {
    getServiceData: apiService.starships.getStarships,
    startRequest,
    finishRequest,
    successRequest,
    failureRequest,
  };
  yield doRequest<Starships, ErrorHttpAction>(options);
}
