"use client";

import React, { useEffect, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import TemplateListSection, { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

function CreateNewContent({ params }: PROPS) {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [templateSlug, setTemplateSlug] = useState<string | null>(null);
  const{user}=useUser();
  useEffect(() => {
    // Resolve the params promise and set the template slug
    params.then((resolvedParams) => {
      const slug = resolvedParams["template-slug"];
      setTemplateSlug(slug);

      // Find the template based on the slug
      const template = Templates?.find((item) => item.slug === slug);
      setSelectedTemplate(template);
    });
  }, [params]);

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>();


  const GenrateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + "," + selectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    console.log(result?.response.text());
    setAiOutput(result?.response.text());
    await SaveInDb(formData,selectedTemplate?.slug,result?.response.text());
    setLoading(false);
  };

 
  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    try {
      const createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); // Use correct timestamp format
      console.log("Saving to DB with createdAt:", createdAt);
  
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: createdAt, 
      });
  
      console.log(result);
    } catch (error) {
      console.error("Error saving to DB:", error);
    }
  };
  


  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenrateAIContent(v)} loading={loading}
        />
        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;