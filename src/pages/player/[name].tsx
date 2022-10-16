import API from '@/services/api';
import { PlayerDataProps } from '@/utilts/types';
import { GetServerSideProps } from 'next';

export default function Home({ playerData }: PlayerDataProps) {
  return <>{playerData.player.nickname}</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route = `/api/${context?.params?.name}`;
  const playerData = await API.get(route).then((response) => {
    return response.data;
  });
  return {
    props: { playerData },
  };
};
