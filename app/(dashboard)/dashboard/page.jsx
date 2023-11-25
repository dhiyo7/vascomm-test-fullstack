'use client';

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import Card from '@/components/Card'
import ContentTitle from '@/components/dashboard/ContentTitle'
import DashboardCard from '@/components/dashboard/DashboardCard'
import MainWrapper from '@/components/dashboard/MainWrapper'

const DashboardPage = () => {
  // const { data, isLoading, isError, refetch } = useQuery({
  //   queryKey: ['count'],
  //   queryFn: async () => {
  //     const { data } = await axios.get('/api/count');
  //     return data;
  //   },
  // });

  return (
    <MainWrapper>
      <ContentTitle title="Dashboard" />
      <div className="grid grid-cols-4 gap-6 mt-4">
        <DashboardCard
          title="Jumlah User"
          isLoading={false}
          count={150}
          suffix="User"
        />
        <DashboardCard
          title="Jumlah User Aktif"
          isLoading={false}
          count={150}
          suffix="User"
        />
        <DashboardCard
          title="Jumlah Produk"
          isLoading={false}
          count={150}
          suffix="Produk"
        />
        <DashboardCard
          title="Jumlah Produk Aktif"
          isLoading={false}
          count={150}
          suffix="Produk"
        />
      </div>
    </MainWrapper>
  );
};

export default DashboardPage;
