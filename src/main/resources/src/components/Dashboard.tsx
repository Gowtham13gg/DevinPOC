import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

interface DashboardProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Dashboard({ isDarkMode, setIsDarkMode }: DashboardProps) {
  const sidebarItems = [
    { title: 'API Designer', items: [
      { title: 'Create New API', href: '#' },
      { title: 'Update Existing API', href: '#' },
      { title: 'Data Dictionary', href: '#' },
      { title: 'Providers', href: '#' },
      { title: 'Consumers', href: '#' }
    ]},
    { title: 'Test Studio', href: '#' },
    { title: 'Developers Portal', href: '#' },
    { title: 'Monitoring', href: '#' },
    { title: 'Catalog', href: '#' },
    { title: 'Workflow', href: '#' }
  ]

  const tableData = [
    { time: '3:00 AM', api: 'api/verify_credential', totalCalls: 2, totalErrors: 2, totalSuccessful: 0, avgResponseTime: '0.0175', totalResponseTime: '0.00', averageReceived: 2, bytesReceived: '0.00', bytesSent: 0, totalSent: '0.00' },
    { time: '5:00 AM', api: 'api/eligibility', totalCalls: 2, totalErrors: 0, totalSuccessful: 2, avgResponseTime: '0.0175', totalResponseTime: '0.00', averageReceived: 2, bytesReceived: '0.00', bytesSent: 291, totalSent: '0.00' },
    { time: '5:00 AM', api: 'api/credit_verification', totalCalls: 1, totalErrors: 0, totalSuccessful: 1, avgResponseTime: '0.0390', totalResponseTime: '0.00', averageReceived: 2, bytesReceived: '0.00', bytesSent: 455, totalSent: '0.00' }
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
        {/* Left Sidebar */}
        <nav className="w-64 bg-white dark:bg-gray-800 shadow-md p-4 transition-colors">
          <ul className="space-y-4">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                {item.items ? (
                  <div className="space-y-2">
                    <h3 className="text-gray-900 dark:text-gray-100 font-semibold font-['Inter']">{item.title}</h3>
                    <ul className="space-y-1 pl-4">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className="block px-2 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors text-sm font-['Inter']"
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-md transition-colors font-['Inter']"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-colors">
            <h2 className="text-xl font-bold text-gray-900 dark:text-blue-400 mb-6 font-['Poppins']">Dashboard</h2>
            
            {/* Graph */}
            <div className="h-64 bg-blue-50 dark:bg-gray-700 rounded-lg mb-8 p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Growth in Total # of Public APIs</h3>
              {/* Graph placeholder - would be replaced with actual chart library */}
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-50 rounded"></div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">API</th>
                    <th className="px-4 py-3">Total Calls</th>
                    <th className="px-4 py-3">Total Errors</th>
                    <th className="px-4 py-3">Total Successful</th>
                    <th className="px-4 py-3">Avg Response Time</th>
                    <th className="px-4 py-3">Total Response Time</th>
                    <th className="px-4 py-3">Average Received</th>
                    <th className="px-4 py-3">Bytes Received</th>
                    <th className="px-4 py-3">Bytes Sent</th>
                    <th className="px-4 py-3">Total Sent</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-600">
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.time}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.api}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.totalCalls}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.totalErrors}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.totalSuccessful}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.avgResponseTime}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.totalResponseTime}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.averageReceived}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.bytesReceived}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.bytesSent}</td>
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.totalSent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Widgets Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Add Widgets
            </Button>
            <Button
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Add Widgets
            </Button>
            <Button
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Add Widgets
            </Button>
            <Button
              className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Add Widgets
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
