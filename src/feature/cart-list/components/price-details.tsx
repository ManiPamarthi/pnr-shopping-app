"use client";

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import TableComponent from './price-table';
import { useGetDetailsData } from '../api/use-get-details-data';
import { Loader } from 'lucide-react';

const PriceDetails = () => {
     const { data, isLoading, error } = useGetDetailsData();
    
      if (isLoading) return <div className="flex justify-center"><Loader /></div>;
      if (error) return <div className="flex justify-center">Error data</div>;
  return (
    <div>
        <Card className="rounded-none">
          <CardHeader>
            <div className="border-b-2">
                <CardTitle>Product Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
                <TableComponent data={data || []} />
          </CardContent>
        </Card>

    </div>
  )
}

export default PriceDetails;