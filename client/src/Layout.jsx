import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import useSyncUser from './hooks/useSyncUser'
import { useUser } from '@clerk/clerk-react'

const Layout = () => {
  // Use the sync hook to make sure user data is saved to MongoDB
  const { isSyncing, error } = useSyncUser();
  const { isSignedIn } = useUser();
  
  return (
    <div>
        <Navbar/>
        {error && isSignedIn && (
          <div style={{ 
            backgroundColor: '#FEE2E2', 
            color: '#B91C1C', 
            padding: '0.75rem', 
            margin: '0.5rem', 
            borderRadius: '0.25rem',
            textAlign: 'center'
          }}>
            Error syncing user data: {error}
          </div>
        )}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout