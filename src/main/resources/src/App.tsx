import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronDown, Moon, Sun } from "lucide-react"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'

function Login({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (value: boolean) => void }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState("")

  // Sample user credentials
  const sampleUsers = [
    { username: 'admin1', password: 'admin123', role: 'admin' },
    { username: 'admin2', password: 'admin456', role: 'admin' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setError("")
      if (!username || !password || !role) {
        setError("Please fill in all fields")
        return
      }
      
      const user = sampleUsers.find(u => u.username === username && u.password === password)
      if (!user) {
        setError("Invalid username or password")
        return
      }
      
      if (user.role !== role) {
        setError("Selected role does not match user permissions")
        return
      }

      console.log('Login successful:', { username, role });
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(`Login failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  const navigationItems = [
    { title: 'What is API', href: 'https://aws.amazon.com/what-is/api/' },
    { title: 'API Gateway', href: 'https://aws.amazon.com/api-gateway/' },
    { title: 'API Specification', href: 'https://swagger.io/specification/' },
    { title: 'Open API Standard', href: 'https://www.openapis.org/' },
    { title: 'Microservices', href: 'https://aws.amazon.com/microservices/' }
  ]

  const rightNavigationItems = [
    { title: 'What is BPM', href: '#' },
    { title: 'API Monitoring', href: '#' },
    { title: 'Basic concept 1', href: '#' },
    { title: 'Basic concept 2', href: '#' },
    { title: 'Basic concept 3', href: '#' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-blue-900 transition-colors">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md transition-colors">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-blue-400 font-['Poppins']">Brand Name</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 dark:text-gray-400">Powered by</span>
            <span className="font-bold text-gray-800 dark:text-white">Project X</span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Navigation */}
        <nav className="w-64 bg-white dark:bg-gray-800 shadow-md p-4 transition-colors">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors font-['Inter']"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8 flex justify-center items-start">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-blue-400 mb-8 font-['Poppins']">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">User Name</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-['Inter']">Role</label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-colors"
                  >
                    <option value="">Select role</option>
                    <option value="product_manager">Product Manager</option>
                    <option value="developer">Developer</option>
                    <option value="admin">Admin</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Submit
              </Button>

              {error && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2">{error}</p>
              )}
            </form>
          </div>
        </main>

        {/* Right Navigation */}
        <nav className="w-64 bg-white dark:bg-gray-800 shadow-md p-4 transition-colors">
          <ul className="space-y-2">
            {rightNavigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors font-['Inter']"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? false : true
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      </Routes>
    </Router>
  )
}

export default App
