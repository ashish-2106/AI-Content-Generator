"use client";


import { useEffect, useState } from "react";

interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    fetch("/api/history") // ✅ Ensure this matches your API route
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Output History</h1>
      {history.length === 0 ? (
        <p>No history found.</p>
      ) : (
        <ul className="space-y-4">
          {history.map((item) => (
            

            <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="border-t border-b border-l px-4 py-2 text-left">Form Data</th>
                <th className="border-t border-b border-l px-4 py-2 text-left">AI Response</th>
                <th className="border-t border-b border-l px-4 py-2 text-left">Template Slug</th>
                <th className="border-t border-b border-l px-4 py-2 text-left">Created By</th>
                <th className="border-t border-b border-l px-4 py-2 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr key={item.id}>
                <td className="border-b border-l px-4 py-2">{item.formData}</td>
                <td className="border-b border-l px-4 py-2">{item.aiResponse}</td>
                <td className="border-b border-l px-4 py-2">{item.templateSlug}</td>
                <td className="border-b border-l px-4 py-2">{item.createdBy}</td>
                <td className="border-b border-l px-4 py-2">{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          

            
          ))}
        </ul>
      )}
    </div>
  );
}
