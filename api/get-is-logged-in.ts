'use server';

import getUserInfo from './get-is-user-info';

const getIsLoggedIn = async () => {
  try {
    await getUserInfo();
    return true;
  } catch {
    return false;
  }
};

export default getIsLoggedIn;
