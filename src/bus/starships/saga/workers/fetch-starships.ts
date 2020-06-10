// Tools
import {
  starshipsStartRequest, starshipsFinishRequest, starshipsSaccess, starshipsFailure,
} from '../../index';

// Types
import { Starships } from '../../types';

// Workers
import { doRequest } from '../../../../workers';

// API

import { apiService } from '../../../../services';

export function* fetchStarships() {
  const options = {
    getServiceData: apiService.getAllStaeships,
    starshipsStartRequest,
    starshipsFinishRequest,
    starshipsSaccess,
    starshipsFailure,
  };
  yield doRequest<Starships>(options);
}
