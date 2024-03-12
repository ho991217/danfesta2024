import api from '@/app/api';
import { API_ROUTES } from '@/app/constants';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type User = {
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

export default async function Page() {
  try {
    const data = await api.get<User>(API_ROUTES.user.me, {
      withCredential: true,
    });

    // const res = await fetch('https://next.danvery.com/api/user', {
    //   method: 'GET',
    //   headers: {
    //     Cookie: cookies().toString(),
    //   },
    // });
    // const data = await res.json();

    return (
      <div>
        <h1>My Ticket</h1>
        {data.username}
      </div>
    );
  } catch (e) {
    redirect('/ko/login');
  }
}
