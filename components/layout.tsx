import Header from './header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className='site-container'>
          <Header />
          <main className='container'>{children}</main>
      </div>
  )
}

export default Layout
