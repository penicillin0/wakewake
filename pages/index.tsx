import { FirebaseApp, getApp } from "firebase/app";
import type { NextPage } from "next";
import Head from "next/head";
import "../firebase/init"; // Initialize FirebaseApp
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const app: FirebaseApp = getApp();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        <li>name = {app.name}</li>
      </ul>
    </div>
  );
};

export default Home;
