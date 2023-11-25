'use client';
import React, { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import {
  FaEye,
  FaPencil,
  FaPencilAlt,
  FaTrash,
} from 'react-icons/fa'

// import useDeleteDialog from '@/hooks/useDeleteDialog'
// import useUserModal from '@/hooks/useUserModal'
// import { cn, formatCurr } from '@/lib/utils'

import ActionButton from '@/components/ActionButton'
import ActiveBadge from '@/components/ActiveBadge'
import Card from '@/components/Card'
import ContentTitle from '@/components/dashboard/ContentTitle'
import MainWrapper from '@/components/dashboard/MainWrapper'
import { RenderIf } from '@/components/RenderIf'

const columns = (userModal, deleteDialog) => {
  return [
    {
      name: 'No',
      selector: (row, index) => {
        return index + 1;
      },
      width: '50px',
    },
    {
      name: 'Nama Lengkap',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'No. Telepon',
      selector: (row) => row.hpne,
      sortable: true,
    },
    {
      name: 'Status',
      cell: (row, index, column, id) => {
        const { isActive } = row;
        return <ActiveBadge isActive={isActive} />;
      },
      center: true,
      maxWidth: '200px',
      sortable: false,
    },
    {
      name: '',
      maxWidth: '150px',
      cell: (row, index) => {
        return (
          <ActionButton
            allowView={false}
            onEdit={() => {
              userModal.detail = row;
              // userModal.setEdit();
              userModal.onOpen();
            }}
            onDelete={() => {
              deleteDialog.detail = row;
              deleteDialog.api = '/api/users/';
              deleteDialog.onOpen();
            }}
          />
        );
      },
    },
  ];
};

const UserPage = () => {
  // const userModal = useUserModal();
  // const deleteDialog = useDeleteDialog();
  //
  // const { data, isLoading, isError, refetch } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //     const { data } = await axios.get('/api/users');
  //     return data;
  //   },
  // });

  // useEffect(() => {
  //   if (userModal.hasUpdate || deleteDialog.hasUpdate) {
  //     refetch();
  //     userModal.closeUpdate();
  //   }
  //
  //   return () => {
  //     userModal.closeUpdate();
  //     deleteDialog.closeUpdate();
  //   };
  // }, [userModal.hasUpdate, deleteDialog.hasUpdate]);

  return (
    <MainWrapper>
      <ContentTitle
        title="Manajemen User"
        actionLabel="TAMBAH USER"
        actionHandler={() => console.log("asd")}
      />

      <Card className="p-0 mt-4">
        <RenderIf isTrue={false}>
          <div className="w-full text-center p-6">Memuat data user...</div>
        </RenderIf>
        <RenderIf isTrue={false}>
          <div className="w-full text-center p-6 text-rose-500">
            Terjadi kesalahan, silahkan coba lagi!
          </div>
        </RenderIf>
        <RenderIf isTrue={true}>
          <DataTable
            columns={columns()}
            data={[]}
            pagination
            striped
          />
        </RenderIf>
      </Card>
    </MainWrapper>
  );
};

export default UserPage;
