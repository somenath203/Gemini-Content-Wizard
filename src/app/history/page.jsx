'use client';

import Link from "next/link";
import { ArrowLeft, Loader2Icon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { eq, desc } from "drizzle-orm";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutputSchema } from "@/models/modelOutputSchema";
import { db } from "@/NeonDb";


const Page = () => {

  const { user } = useUser();

  const [allRecords, setAllRecords] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchAllRecords = async () => {

    try {

      const userRecords = await db
        .select()
        .from(AiOutputSchema)
        .where(eq(AiOutputSchema?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AiOutputSchema?.id));

      setAllRecords(userRecords);

    } catch (error) {

      console.error("Failed to fetch records:", error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    if (user) fetchAllRecords();
  }, [user]);

  return (

    <div className="p-10">

      <Link href='/dashboard'>
        <Button className='flex items-center justify-center gap-2 ml-5'>
          <ArrowLeft />
          <span>Back to Dashboard</span>
        </Button>
      </Link>

      <div className="ml-5 mt-10 flex flex-col gap-5">
        <p className="text-4xl text-primary font-bold">History</p>
        <p className="text-xl text-primary">Here is a record of all your activities, listed with the most recent first.</p>
      </div>

      <div className="mt-10 ml-5">
        {loading ? (
          <Loader2Icon size={40} className="text-primary transition-all duration-1000 animate-spin" />
        ) : allRecords.length === 0 ? (
          <p className="text-lg text-primary font-semibold">No Records Found</p>
        ) : (
          <Table className='border-2 border-primary'>
            <TableHeader>
              <TableRow className='bg-slate-50'>
                <TableHead className='font-bold'>AI Response</TableHead>
                <TableHead className='font-bold'>Template Slug</TableHead>
                <TableHead className='font-bold'>Created At</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {allRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    {record.aiResponse.split(' ').length <= 6
                      ? record.aiResponse
                      : record.aiResponse.split(' ').slice(0, 6).join(' ') + ' . . . .'}
                  </TableCell>
                  <TableCell>{record.templateSlugName}</TableCell>
                  <TableCell>{record.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

    </div>

  );
};

export default Page;
