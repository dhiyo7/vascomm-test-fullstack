'use client';

import { useCallback } from 'react'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'

import { TbPhotoPlus, TbPhotoUp } from 'react-icons/tb'

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="bc3cjw4u"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoUp size={50} className="text-blue-300" />
            <div className="font-semibold text-zinc-400">Pilih gambar dengan ratio 9:16</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
