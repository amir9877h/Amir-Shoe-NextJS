import Chart from "@/components/Dashboard/Chart";
import DashboardStats from "@/components/Dashboard/DashboardStats";
import RecentSales from "@/components/Dashboard/RecentSales";
import { unstable_noStore as noStore } from "next/cache";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

import React from "react";

async function getData() {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const data = await prisma.product.findMany({
    where: {
      craetedAt: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      price: true,
      craetedAt: true,
    },
    orderBy: {
      craetedAt: "asc",
    },
  });

  const result = data.map((item) => ({
    date: new Intl.DateTimeFormat("en-US").format(item.craetedAt),
    revenue: item.price / 100,
  }));

  return result;
}

const Dashboard = async () => {
  noStore();
  const data = await getData();
  return (
    <>
      <DashboardStats />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Products Added</CardTitle>
            <CardDescription>
              Recent Products from your store in last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>
        <RecentSales />
      </div>
    </>
  );
};

export default Dashboard;
