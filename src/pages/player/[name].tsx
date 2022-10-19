import BannerHeader from '@/components/bannerHeader';
import { DataTabs } from '@/components/dataTabs';
import { Footer } from '@/components/footer';
import API from '@/services/api';
import { PlayerDataProps } from '@/utilts/types';
import { GetServerSideProps } from 'next';
import { MainBox } from '../../styles/player';
import { useRouter } from 'next/router';
import { BadgePLayerSelector } from '@/components/badgePlayerSelector';
import Head from 'next/head';

export default function Home({ playerData }: PlayerDataProps) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Head>
        <title>GC Test | Daniel Alves</title>
      </Head>
      <MainBox>
        <BannerHeader {...playerData} />
        <DataTabs {...playerData} />
        <Footer {...playerData} />
        <BadgePLayerSelector name={name}></BadgePLayerSelector>
      </MainBox>
    </>
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
