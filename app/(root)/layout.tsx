import Mobilenav from '@/components/shared/Mobilenav'
import Sidebar from '@/components/shared/Sidebar'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { ModeToggle } from '@/components/shared/ToggleButton'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='root'>
                <Sidebar />
                <Mobilenav />
                <div className='root-container'>
                    <div className='wrapper'>
                        {children}
                    </div>
                </div>
                <Toaster />
                <ToastContainer position='top-center' />
        </main>
    )
}

export default Layout