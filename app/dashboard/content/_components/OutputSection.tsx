import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';


interface PROPS {
 aiOutput?: string;
}

function OutputSection( {aiOutput} : PROPS) {
  const editorRef: any = useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])

  return (

    <div className='bg-white shadow-lg border rounded'>
      <div className='flex justify-between items-center p-5'>
        <h1 className='font-medium text-lg'>Your Result</h1>
        <Button className=' flex gap-2'><Copy />Copy</Button>
      </div>
      
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
     
    </div>
  )
}

export default OutputSection
