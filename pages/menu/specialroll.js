import Head from 'next/head'
import axios from 'axios'
import { Inter } from 'next/font/google'
import MenuList from '@/components/Menu components/MenuList'
import Menu from '@/components/Menu components/Menu'
import BeverageList from '@/components/Menu components/Food List/BeverageList'
import FoodList from '@/components/Menu components/Food List/FoodList'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ foodList }) {
  return (
    <>
      <Head>
        <title>Kyoto Hibachi Sushi & Bar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu>
        <FoodList foodList={foodList}></FoodList>
      </Menu> 
    </>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      foodList: res.data, 
    }
  }
}
