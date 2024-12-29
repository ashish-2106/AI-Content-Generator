"use client"
import { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIOutputItem {
  id: number;
  formData: string;
  templateSlug: string;
  aiResponse: string;
  createdBy: string;
  createdAt: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<AIOutputItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/NEXT_PUBLIC_DRIZZLE_DB_URL/history"); // API route to fetch history data
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6" >
      <Link href="/dashboard">
        <Button><ArrowLeft/>Back</Button>
      </Link>
      <div className="bg-white  mt-4 p-4">
      <h1 className="text-2xl font-bold ">History</h1>
      <p className='text-sm text-gray-600 mt-1 mb-3 '>Search your Previously generated AI content</p>


      
        <table className="w-full table-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Template Slug</th>
              <th className="border px-4 py-2">Form Data</th>
              <th className="border px-4 py-2">AI Response</th>
              <th className="border px-4 py-2">Created By</th>
              <th className="border px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.templateSlug}</td>
                <td className="border px-4 py-2">{item.formData}</td>
                <td className="border px-4 py-2 truncate max-w-xs">{item.aiResponse}</td>
                <td className="border px-4 py-2">{item.createdBy}</td>
                <td className="border px-4 py-2">{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
    </div>
  );
};

export default HistoryPage;
