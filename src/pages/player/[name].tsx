import BannerHeader from '@/components/bannerHeader';
import { DataTabs } from '@/components/dataTabs';
import { Footer } from '@/components/footer';
import API from '@/services/api';
import { PlayerDataProps } from '@/utilts/types';
import { GetServerSideProps } from 'next';
import { MainBox } from './styles';

export default function Home({ playerData }: PlayerDataProps) {
  console.log(playerData);
  return (
    <MainBox>
      <BannerHeader {...playerData} />
      <DataTabs {...playerData} />
      <Footer {...playerData} />
    </MainBox>
  );
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
