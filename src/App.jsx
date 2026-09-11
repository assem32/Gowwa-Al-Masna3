import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import IntroPage from './pages/IntroPage'
import FormPage from './pages/FormPage'
import OwnersDirectoryPage from './pages/OwnersDirectoryPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');

  return (
    <Layout currentScreen={currentScreen} onNavigate={setCurrentScreen}>
      <>
        {currentScreen === 'intro' && <IntroPage onExploreDirectory={() => setCurrentScreen('directory')} onOpenForm={() => setCurrentScreen('form')} />}
        {currentScreen === 'form' && <FormPage />}
        {currentScreen === 'directory' && <OwnersDirectoryPage onGoToForm={() => setCurrentScreen('form')} />}
        {currentScreen === 'about' && <AboutPage />}
      </>
    </Layout>
  )
}

export default App
