"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ImageUpload() {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleCameraCapture = () => {
    // Implement camera capture functionality here
    console.log("Camera capture not implemented")
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
            isDragActive ? "border-primary" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
        <div className="mt-4">
          <Button onClick={handleCameraCapture} className="w-full">
            <Camera className="w-4 h-4 mr-2" />
            Take a Photo
          </Button>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Uploaded Files:</h3>
            <ul>
              {files.map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

