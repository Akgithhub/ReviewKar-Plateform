import React, { useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const UploadImageCardCreation = () => {
  const dispatch = useDispatch();
  const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
  const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

  const [uploadError, setUploadError] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false); // 👈 new state

  const imageUrlFromRedux = useSelector((state) => state.user.imageUrl);

  const authenticator = async () => {
    const imageUploadApi = `${import.meta.env.VITE_API_URL}/upload`;
    try {
      const response = await fetch(imageUploadApi);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Auth Error:", error);
      setUploadError("Authentication with ImageKit failed.");
      throw error;
    }
  };

  const onSuccess = (res) => {
    console.log("Uploaded Image URL:", res.url);
    dispatch(setUser({ imageUrl: res.url }));
    setPreviewImageUrl(res.url);
    setIsImageLoading(true); // 👈 start loading when image URL is set
    setUploadError(null);
  };

  const onError = (err) => {
    console.error("Upload Error:", err);
    setUploadError("Failed to upload image. Please try again.");
  };

  const previewImage = (res) => {
    console.log("Uploaded Image URL:", res.url);
    setPreviewImageUrl(res.url);
    setIsImageLoading(true); // 👈 start loading when image URL is set
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-sm font-medium">Upload Your Card Image</h2>

      <IKContext publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
        <IKUpload
          onError={onError}
          onSuccess={(res) => {
            onSuccess(res);
            previewImage(res);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded shadow cursor-pointer"
        />
      </IKContext>

      {/* Preview Section */}
      {previewImageUrl && (
        <div className="mt-6 relative w-48 h-48">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 rounded shadow">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={previewImageUrl}
            alt="Uploaded Preview"
            className="w-48 h-48 object-cover rounded shadow"
            onLoad={() => setIsImageLoading(false)} // 👈 hide loader when loaded
          />
        </div>
      )}

      {/* Error Message */}
      {uploadError && (
        <div className="mt-4 text-red-600 font-medium bg-red-100 border border-red-300 rounded px-4 py-2">
          {uploadError}
        </div>
      )}
    </div>
  );
};

export default UploadImageCardCreation;
