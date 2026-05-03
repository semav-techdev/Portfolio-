import {createRootRoute,createRoute,createRouter,Outlet} from '@tanstack/react-router'
import { motion } from 'framer-motion'

import Navbar from '../component/Navbar'
// import Footer from '../component/Footer'

import Hero from '../Pages/Hero'
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import contact from '../component/Footer'


function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24">
        <Outlet />
      </div>
    </>
  )
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

// 📄 Routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Hero,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
})

const contactRoute = createRoute({
  getParentRoute:()=> rootRoute,
  path : '/contact',
  component :contact,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  projectsRoute,
  contactRoute,
])

export const router = createRouter({ routeTree })