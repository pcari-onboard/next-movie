import Layout from '../components/layout'
import RootContainer from '../components/pages/rootContainer'
import { MovieProvider } from 'context/MovieContext'

export default function Home() {
  return (
    <Layout>
      <RootContainer />
    </Layout>
  )
}
