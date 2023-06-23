import Head from 'next/head'
import Box from '@mui/material/Box';
import styles from '@/styles/Home.module.css'
import {useQuery} from "react-query";
import {fetchUsers} from "@/services/getUsers";
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useMemo} from "react";
import {Card, Typography} from "@mui/material";

export default function Home() {
	const router = useRouter()
	const {data: users} = useQuery('get-users', fetchUsers);

	const user = useMemo(() => {
		return users?.find((user: any) => user.id === Number(router.query.slug));
	}, [router.query.slug, users])

	return (
		<>
			<Head>
				<meta name="description" content={`User Details ${user?.name}`}/>
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<Box sx={{height: 400, width: '100%'}}>
					<Typography color="primary" variant="h3" gutterBottom>
						User Details
					</Typography>
					<Card sx={{p: 4, display: 'grid', gridTemplateColumns: "300px 1fr"}}>
						<Box>
							<Image
								src={user?.image}
								width={200}
								height={200}
								alt="Picture of the author"
							/>
						</Box>
						<Box>
							<Typography variant="h5" gutterBottom>
								Name: {user?.name}
							</Typography>
							<Typography variant="h5" gutterBottom>
								Age: {user?.age}
							</Typography>
							<Typography variant="h5" gutterBottom>
								Email: {user?.email}
							</Typography>
							<Typography variant="h5" gutterBottom>
								City: {user?.city}
							</Typography>
						</Box>
					</Card>
				</Box>
			</main>
		</>
	)
}
