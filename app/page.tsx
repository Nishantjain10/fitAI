import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-3xl font-bold text-blue-500 underline">
    Hello world!
  </h1>
  )
}
