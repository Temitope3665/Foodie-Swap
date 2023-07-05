import axios from "axios";

export const cloudaryImgUpload = async (avatar: any) => axios({
    method: 'POST',
    url: process.env.NEXT_PUBLIC_CLOUDINARY_BASEURL,
    data: avatar,
  });

export const uploadImage = (formData: any, setUrlLink: any, setIsUploading: any, setResult: any) => {
    cloudaryImgUpload(formData)
    .then((res) => {
        setUrlLink(res.data.url);
        setResult({ type: 'success', message: 'Successfully uploaded!!!' })
    })
    .catch((error) => setResult({ type: 'error', message: 'Error occured' }))
    .finally(() => setIsUploading(false))
};