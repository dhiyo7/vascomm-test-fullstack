'use client';
import { VscLoading } from 'react-icons/vsc'

import Card from '@/components/Card'

const DashboardCard = ({ title, count = 0, suffix, isLoading }) => {
  return (
    <Card className="rounded-2xl bg-blue-200">
      <div className="flex flex-col gap-2">
        <div className="text-zinc-600">{title}</div>
        <div className="flex flex-row gap-2 items-end font-semibold">
          {isLoading ? (
            <VscLoading className="animate-spin" size={32} />
          ) : (
            <div className="text-2xl">{count}</div>
          )}

          <div className="">{suffix}</div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
