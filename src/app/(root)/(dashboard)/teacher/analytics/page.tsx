import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { getAnalytics } from '~/actions/get-analytics';

import { DataCard } from './_components/data-card';
import { Chart } from './_components/chart';

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const { data, totalRevenue, totalSales } =
    await getAnalytics(userId);

  return (
    <div className="p-6">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <DataCard
          label="Total Revenue"
          value={totalRevenue}
          shouldFormat
        />
        <DataCard label="Total Sales" value={totalSales} />
      </div>
      <Chart data={data} />
    </div>
  );
};

export default AnalyticsPage;
