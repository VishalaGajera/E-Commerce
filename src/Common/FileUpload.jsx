import { useState } from "react";
import { supabase } from "../../../../Backend/Config/supabaseClient";

export const FileUpload = () => {
  const [file, setFile] = useState(null);

  const [uploading, setUploading] = useState(false);

  const [fileURL, setFileURL] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);

      if (!file) {
        alert("Please select a file before proceeding with the upload.");

        return;
      }

      const fileExt = file.name.split(".").pop();

      const fileName = `${Math.random()}.${fileExt}`;

      const filePath = `${fileName}`;

      // Correct usage of 'from' method
      let { error } = await supabase.storage.from("E-Commerce").upload(filePath, file);

      if (error) {
        throw error;
      }

      const { data: url } = await supabase.storage.from("E-Commerce").getPublicUrl(filePath);

      setFileURL(url.publicUrl);

      alert("File uploaded successfully.");
    } catch (error) {
      alert(`Error uploading file: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {fileURL && (
        <div>
          <p>File Upload to : {fileURL}</p>
          <img src={fileURL} alt="Uploaded file" style={{ width: "300px", height: "auto" }} />
        </div>
      )}
    </>
  );
};
