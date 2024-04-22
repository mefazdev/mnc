import React, { useEffect, useState } from "react";
import AdminNav from "../../../../components/AdminNav";
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from "@material-ui/core";
import { IoIosCloseCircle } from "react-icons/io";
import shortid from 'shortid';
import { deleteObject, getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "../../../../firebase";
import cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Index() {
  const [img,setImg] = useState('')
  const [open,setOpen] = useState(false)
  const [data,setData] = useState([])
  const [uploading,setUploading] = useState(false)
const [deleting,setDeleting] = useState('false')
const router = useRouter()
useEffect( async()=>{
  const adminUser = await cookies.get('admin') 
  
  if(adminUser === 'false'){
      router.push('/admin/Login')
       
  }
  
})

  const getData = async  ()=>{
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/poster`, {});
      const {data} = await res.json();
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  },[])
  const handleImg =(e)=>{
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImg(readerEvent.target.result);
    };
  }

  const uploadPhoto = async () => {
    setUploading(true);
   const imgId = shortid.generate()
    try {
      const photoRef = ref(storage, `photo/${imgId}`);
      await uploadString(photoRef, img, "data_url").then(async (snapshot) => {
        const downloadURL = await getDownloadURL(photoRef);
 

        addPoster(downloadURL,imgId)
      });

 
    } catch (error) {
      alert(error);
      setUploading(false);
    }
  };
  const addPoster = async (downloadURL,imgId) => {
   
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/poster`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         image:downloadURL,
         imgId:imgId,
         timeStamp:new Date()
        }),
      });
       
      setUploading(false)
      setOpen(false)
      getData()
      setImg(null)
    } catch (error) {
      setUploading(false);
      alert(error);
    }
  };

  const delDoc = async (docId) => {
  
    try {
      await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/poster/delete/${docId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setDeleting('');
      getData();
    } catch (error) {
      setDeleting(false);
      alert(error);
    }
  };

  const deleteImg = (docId,imgId) => {
    setDeleting(docId);
    const imgRef = ref(storage, `photo/${imgId}`);
    deleteObject(imgRef);
delDoc(docId)
  };
  return (
    <div>
      <AdminNav />
 
      <div className="px-4 md:px-0 md:w-10/12 m-auto py-14">
        <div className="flex justify-between ">
          <h4 className="text-lg font-semibold">Posters</h4>{" "}
          <button className="bg-emerald-600 py-1 px-7 text-white rounded "
          onClick={()=>setOpen(true)}
          >
            Add
          </button>
        </div>

        <div className=" mt-10 gap-5 grid md:grid-cols-2 lg:grid-cols-4">
           {data?.map((d,i)=>{
            return(
           <div key={i}>
               <img  src={d?.image} />
            
               <button
                      className="p-1 bg-red-500 text-white m-auto w-full mt-2 rounded"
                      onClick={()=>deleteImg(d._id,d.imgId)}
                    >
             {deleting === d._id ? 'DELETING': 'DELETE'}
                    </button>
           </div>
            )
           })}
        </div>
      </div>


      <Dialog   open={open}   >
      {/* <DialogTitle>Select Poster <IoIosCloseCircle/></DialogTitle> */}
      <div className="relative p-4 pb-0">
        <h4 className="text-md font-semibold">Select A Poster</h4>
        <IoIosCloseCircle className="absolute right-4 top-4 text-2xl text-red-500"
        onClick={()=>setOpen(false)}
        />
      </div>
     
      <div className="  p-5   w-10/12">
                {!img ? <input
                  onChange={handleImg}
                  type="file"
                  className="  m-auto"
                /> : ''}

              {img?   <div className="border w-fit">
                  <img style={{ maxWidth: "300px" }} src={img} />
                  {/* {img ? ( */}
                    <button
                      className="p-1 bg-red-500 text-white m-auto w-full mt-2 rounded"
                      onClick={() => setImg(null)}
                    >
                   CHANGE
                    </button>

                    <button
                      className="p-1 bg-emerald-500 text-white m-auto w-full mt-4 rounded"
                      onClick={uploadPhoto}
                    >
           {uploading ? 'UPLOADING...' : ' UPLOAD'}
                    </button>
                  {/* ) : (
                    ""
                  )} */}
                </div> :''}

                
              </div>
      </Dialog>

    </div>
  );
}
