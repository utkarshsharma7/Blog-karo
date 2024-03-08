"use client"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 import { Label } from "@/components/ui/label"
import EditorTiny from "@/components/Editor"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z
  .object({
    slug: z.string(),
    content: z.string(),
    image: z.string()
  })

  
  function addpost() {
    return (
      <div className="w-full w-1/2 mx-auto pt-8">
      <div className=" w-full mx-auto items-center gap-1.5">
      <Label htmlFor="picture" className="text-white">Picture</Label>
      <Input name="image" id="picture" className="text-white" type="file" />
      <input type="text" className="w-full" name="slug" />
      <EditorTiny />
     <Button >Submit</Button>
    </div>
    </div>
    )
  }
  
  export default addpost


 
