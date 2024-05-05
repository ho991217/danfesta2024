'use server';

import { getServerSideToken, post } from '@api/.';
import { API_ROUTES } from '@lib/constants';

type StampInfo = {
  mission1: boolean;
  mission2: boolean;
  mission3: boolean;
  mission4: boolean;
  mission5: boolean;
  mission6: boolean;
  mission7: boolean;
};

export async function getStamps(): Promise<boolean[]> {
  try {
    const response = await post<{}, StampInfo>(
      API_ROUTES.stamp.list,
      {},
      { token: await getServerSideToken() },
    );

    return [
      response.mission1,
      response.mission2,
      response.mission3,
      response.mission4,
      response.mission5,
      response.mission6,
      response.mission7,
    ];
  } catch {
    return [];
  }
}
