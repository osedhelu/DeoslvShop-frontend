import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui'

interface props {
    title: string,
    description: string,
    img?: string,
    children?: JSX.Element | JSX.Element[]
}

export const ShopLayout: FC<props> = ({ children, description, img, title }) => {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta name='description' content={description} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={description} />
                {
                    img && (
                        <meta name='og:image' content={img} />
                    )
                }
            </Head>
            <nav>
                <Navbar />
            </nav>
            {/* TASK: aqui poner el sidebar  */}
            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>
            {/* Footer */}
            <footer>

            </footer>
        </>

    )
}
