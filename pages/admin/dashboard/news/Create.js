 
import React, { useEffect, useState } from "react";
 

import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import shortid from "shortid";
 

export default function Component() {
  const [title, setTitle] = useState("  ");
  const [img, setImg] = useState("");
  const [uploading, setUploading] = useState(false);
   
 const [file, setFile] = useState(null);
 
 
  const [editorValue, setEditorValue] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const getAdmin = () => {
      const adminUser = cookies.get("admin");
      if (adminUser === "false") {
        router.push("/admin/Login");
      }
      getAdmin();
    };
  });


  const handleTitle = (e) => {
    setTitle(e.target.value);
    const value = e.target.value;
 
    // const text = value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    // const slug = text.replace(/^-+|-+$/g, "");
    // setSlug(slug);
  };
  
  // const handleChange = (value) => {
  //   setEditorValue(value);
  //   setContent(value.toString("html"));

  // };

  
  const handleImg = (e) => {
    const file = e.target.files[0];
    const fileSizeInKB = file.size / 1024;
    console.log(fileSizeInKB);
    if (fileSizeInKB > 500) {
      alert("File size exceeds 500KB. Please upload a smaller file.");
      setImg(null);
      setFile(null);
      return;
    }

    setFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  const handleUpload = async (e) => {
    e.preventDefault();
  
   
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.imageUrl);
        addBlog(data);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (error) {
      alert(error.message);
    } finally {
    }
  };
  const addBlog = async (imgData) => {
    
    const slug = shortid.generate()
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: editorValue,
          slug: slug,
          image: imgData.imageUrl,
          imgId: imgData.publicId,
          createdAt: new Date(),
        }),
      });
      router.push("/admin/dashboard/news");
     setUploading(false);
    } catch (error) {
      setUploading(false);
      alert(error);
    }
  };

  return (
    <div>
      <div className="px-5 lg:px-0 lg:w-10/12 m-auto mt-12 pb-24">
        <h4 className="text-2xl font-bold">Create Blog</h4>

        <form onSubmit={handleUpload}>
        <div className="mt-16">
          <div>
          {/* <TextField
              className="mt-6"
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={handleTitle}
            /> */}
            <input
              className="mt-6 border placeholder:text-red-700"
              placeholder="Title"
              // fullWidth
              // id="outlined-basic"
              // label="Title"
              // variant="outlined"
            
              value={title}
              onChange={handleTitle}
            />

            <div className="mt-12">
           

              {/*<<<<<<<<<<<<<<<<< RICHT TEXT EDITOR  >>>>>>>>>>>> */}
              <RichTextEditorComponent change={(e) => setEditorValue(e.value)}>
                <Inject
                  services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}
                />
              </RichTextEditorComponent>
              <div className="mt-10 ">
                <p className="text-lg font-bold">Image</p>
                <div className="grid grid-cols-2 border p-5 mt-6">
                  <input
                    onChange={handleImg}
                    type="file"
                    className="mt-4 m-auto"
                  />

                  <div className="border w-fit">
                    <img style={{ maxWidth: "200px" }} src={img} />
                    {img ? (
                      <button
                        className="p-1 bg-red-500 text-white m-auto w-full mt-2"
                        onClick={() => setImg(null)}
                      >
                        Remove
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="flex w-full mt-24">
                <button
            type="submit"
               disabled={uploading}
                  className="m-auto bg-green-500 p-2 w-4/12 text-white rounded"
                >
                  {uploading ? "UPLOADING..." : "UPLOAD"}
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
