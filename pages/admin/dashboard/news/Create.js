import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

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
  // const [slug, setSlug] = useState("");

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
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  };

  const uploadPhoto = async (_id) => {
    try {
      const photoRef = ref(storage, `photo/${_id}`);
      await uploadString(photoRef, img, "data_url").then(async (snapshot) => {
        const downloadURL = await getDownloadURL(photoRef);

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_PORT}/api/news/${_id}`,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                image: downloadURL,
              }),
            }
          );

          router.push("/admin/dashboard/news");
          setUploading(false);
          setTitle("");
          setImg("");
        } catch (error) {
          setUploading(false);
          alert(error);
        }
      });
    } catch (error) {
      alert(error);
      setUploading(false);
    }
  };
  const addBlog = async () => {
    setUploading(true);
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
          createdAt: new Date(),
        }),
      });
      const { data } = await res.json();
      uploadPhoto(data?._id);
    } catch (error) {
      setUploading(false);
      alert(error);
    }
  };

  return (
    <div>
      <div className="px-5 lg:px-0 lg:w-10/12 m-auto mt-12 pb-24">
        <h4 className="text-2xl font-bold">Create Blog</h4>

        <div className="mt-16">
          <div>
            <TextField
              className="mt-6"
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={handleTitle}
            />

            <div className="mt-12">
              {/* <p className="text-lg font-bold">Content</p>
            <RichTextEditor
              className="mt-2 min-h-[200px]"
              value={editorValue}
              onChange={handleChange}
              id="body-text"
              name="bodyText"
              type="string"
              multiline
              variant="filled"
             
            /> */}

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
                  onClick={addBlog}
                  className="m-auto bg-green-500 p-2 w-4/12 text-white rounded"
                >
                  {uploading ? "UPLOADING..." : "UPLOAD"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
