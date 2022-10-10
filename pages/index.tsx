import { ShopLayout } from '@/components/layout'
import { Typography } from '@mui/material'
import { NextPage } from 'next'

interface props { }

const Home: NextPage<props> = ({ }) => {
  return (
    <ShopLayout description='encuentra los mejores productos de Deoslv-shop' title='Deoslv-shop'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
    </ShopLayout>

  )
}

export default Home