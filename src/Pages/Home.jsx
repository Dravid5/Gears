import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollections/NewCollection'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import { Footer } from '../Components/Footer/Footer'

export const Home = () => {
  return (
    <div className="home">
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollection></NewCollection>
      <Newsletter></Newsletter>
    </div>
  )
}
