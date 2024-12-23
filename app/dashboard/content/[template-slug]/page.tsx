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

interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

function CreateNewContent({ params }: PROPS) {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [templateSlug, setTemplateSlug] = useState<string | null>(null);

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
    const result = await chatSession.sendMessage(FinalAIPrompt)
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false);
  };

  if (!templateSlug) {
    return <p>Loading...</p>; // Show a loading state while params are resolving
  }

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