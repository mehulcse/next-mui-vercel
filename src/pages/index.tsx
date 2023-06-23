import Head from 'next/head'
import { Inter } from 'next/font/google';
import Box from '@mui/material/Box';
import styles from '@/styles/Home.module.css'
import {useQuery} from "react-query";
import {fetchUsers} from "@/services/getUsers";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const columns: GridColDef[] = [
	{
		field: 'id', headerName: 'ID', width: 90, flex: 1,
		renderCell: (params) => (
			<Link href={`/user/${params.value}`} className={styles.link}>
				{params.value}
			</Link>
		)
	},
	{
		field: 'name',
		headerName: 'Name',
		flex: 1,
		renderCell: (params) => (
			<Link href={`/user/${params.row.id}`} className={styles.link}>
				{params.value}
			</Link>
		)
	},
	{
		field: 'age',
		headerName: 'Age',
		flex: 1,
	},
	{
		field: 'email',
		headerName: 'Email',
		flex: 1,
	},
	{
		field: 'city',
		headerName: 'City',
		sortable: false,
		flex: 1,
	},
];


export default function Home() {
  const { isLoading, isFetching, data: users } = useQuery('get-users', fetchUsers);

  return (
    <>
      <Head>
        <title>Users App - POC</title>
        <meta name="description" content="Users List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
	      <Box sx={{ height: 400, width: '100%' }}>
		      <DataGrid
			      rows={users || []}
			      columns={columns}
			      initialState={{
				      pagination: {
					      paginationModel: {
						      pageSize: 5,
					      },
				      },
			      }}
			      pageSizeOptions={[5]}
			      checkboxSelection
			      disableRowSelectionOnClick
		      />
	      </Box>
      </main>
    </>
  )
}
