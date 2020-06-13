import React from 'react'
import Layout from '../components/Layout'
import NotFoundPageStyled from '../components/NotFoundPage'

const NotFoundPage = () => (
  <Layout title='404' description='Nie znaleziono strony' slug='/404/'>
    <NotFoundPageStyled />
  </Layout>
)

export default NotFoundPage
