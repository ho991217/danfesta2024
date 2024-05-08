export type User = {
  studentId: string;
  username: string;
  nickname: string;
  age: string;
  gender: string;
  yearOfAdmission: string;
  major: string;
  department: string;
  phoneNumber: string;
  profileImage: string;
  writePostCount: number;
  commentedPostCount: number;
  likedPostCount: number;
  petitionCount: number;
  agreedPetitionCount: number;
  admin: boolean;
  dkuChecked: boolean;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};
