'use client';
import { useMemo, useState } from 'react'

import axios, { HttpStatusCode } from 'axios'
import toast from 'react-hot-toast'

// import useDeleteDialog from '@/hooks/useDeleteDialog'

import Dialog from './Dialog'

const DeleteModal = () => {
  // const deleteDialog = useDeleteDialog();

  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="text-center text-zinc-500">
      {/*Apakah kamu yakin menghapus &quot;{deleteDialog?.detail?.name}&quot;?*/}
    </div>
  );

  // const onSubmit = () => {
  //   setIsLoading(true);
  //
  //   axios
  //     .delete(deleteDialog.api + deleteDialog?.detail._id)
  //     .then((res) => {
  //       const { code, data, message } = res.data;
  //       if (code === HttpStatusCode.Ok) {
  //         toast.success(message);
  //         reset();
  //         deleteDialog.openUpdate();
  //         deleteDialog.onClose();
  //       } else {
  //         toast.error(message);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error('Something went wrong.');
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  return (
    <Dialog
      disabled={isLoading}
      isOpen={false}
      title="Konfirmasi Hapus"
      actionLabel="Hapus"
      secondaryActionLabel="Batal"
      secondaryAction={false}
      onClose={false}
      onSubmit={() => onSubmit()}
      body={bodyContent}
    ></Dialog>
  );
};

export default DeleteModal;
