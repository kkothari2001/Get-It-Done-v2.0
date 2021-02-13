import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

import List from "./../components/List/List";

export default function Home() {
	return (
		<>
			<Head>
				<title>NextJS boilerplate</title>
				<link rel="icon" href="/favicon.ico" />
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<List />
		</>
	);
}
