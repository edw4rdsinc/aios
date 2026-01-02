'use client'

import { useEffect, useState } from 'react'

const SUPABASE_URL = 'https://exzeayeoosiabwhgyquq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4emVheWVvb3NpYWJ3aGd5cXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NzQ3MDksImV4cCI6MjA2OTU1MDcwOX0.9xwKT8fyCH7GTPOEFh-1eP-l3Myfv-nwJpsAwvjEW0s'

interface BotVisit {
  id: number
  bot: string
  path: string
  site: string
  user_agent: string
  timestamp: string
}

interface SiteStats {
  site: string
  total: number
  bots: Record<string, number>
}

export default function AIBotsPage() {
  const [visits, setVisits] = useState<BotVisit[]>([])
  const [stats, setStats] = useState<SiteStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedSite, setSelectedSite] = useState<string>('all')
  const [timeRange, setTimeRange] = useState<string>('today')
  const [allSites, setAllSites] = useState<string[]>(['all'])

  useEffect(() => {
    fetchData()
  }, [selectedSite, timeRange])

  async function fetchData() {
    setLoading(true)
    setError(null)

    try {
      // Calculate date range
      const now = new Date()
      let startDate = new Date()
      switch (timeRange) {
        case 'today':
          // Midnight Pacific time - PST is UTC-8, PDT is UTC-7
          const isPDT = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', timeZoneName: 'short' }).includes('PDT')
          const offset = isPDT ? '-07:00' : '-08:00'
          const dateStr = now.toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' })
          startDate = new Date(dateStr + 'T00:00:00' + offset)
          break
        case '7d':
          startDate.setDate(now.getDate() - 7)
          break
        case '28d':
          startDate.setDate(now.getDate() - 28)
          break
        case 'lifetime':
          startDate = new Date('2020-01-01')
          break
      }

      // Paginate through all results (Supabase caps at 1000 per request)
      const allData: BotVisit[] = []
      const pageSize = 1000
      let offset = 0
      let hasMore = true

      while (hasMore) {
        let url = `${SUPABASE_URL}/rest/v1/ai_bot_visits?select=*&timestamp=gte.${startDate.toISOString()}&order=timestamp.desc&limit=${pageSize}&offset=${offset}`

        if (selectedSite !== 'all') {
          url += `&site=eq.${selectedSite}`
        }

        const response = await fetch(url, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          },
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }

        const data: BotVisit[] = await response.json()
        allData.push(...data)

        if (data.length < pageSize) {
          hasMore = false
        } else {
          offset += pageSize
        }
      }

      setVisits(allData)

      // Calculate stats by site
      const siteMap = new Map<string, SiteStats>()

      for (const visit of allData) {
        if (!siteMap.has(visit.site)) {
          siteMap.set(visit.site, { site: visit.site, total: 0, bots: {} })
        }
        const siteStats = siteMap.get(visit.site)!
        siteStats.total++
        siteStats.bots[visit.bot] = (siteStats.bots[visit.bot] || 0) + 1
      }

      setStats(Array.from(siteMap.values()).sort((a, b) => b.total - a.total))

      // Update sites list with all unique sites from data
      const uniqueSites = Array.from(new Set(allData.map(v => v.site))).sort()
      setAllSites(['all', ...uniqueSites])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">AI Bot Analytics</h1>
        <p className="text-gray-400 mb-8">Track AI crawler visits across all your sites</p>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <select
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
          >
            {allSites.map(site => (
              <option key={site} value={site}>
                {site === 'all' ? 'All Sites' : site}
              </option>
            ))}
          </select>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
          >
            <option value="today">Today</option>
            <option value="7d">Last 7 days</option>
            <option value="28d">Last 28 days</option>
            <option value="lifetime">Lifetime</option>
          </select>

          <button
            onClick={fetchData}
            className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2"
          >
            Refresh
          </button>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-8">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm uppercase tracking-wide">Total Bot Visits</h3>
                <p className="text-4xl font-bold mt-2">{visits.length}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm uppercase tracking-wide">Unique Bots</h3>
                <p className="text-4xl font-bold mt-2">
                  {new Set(visits.map(v => v.bot)).size}
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm uppercase tracking-wide">Sites Tracked</h3>
                <p className="text-4xl font-bold mt-2">
                  {new Set(visits.map(v => v.site)).size}
                </p>
              </div>
            </div>

            {/* Stats by Site */}
            {stats.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">By Site</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stats.map(siteStats => (
                    <div key={siteStats.site} className="bg-gray-800 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-400">{siteStats.site}</h3>
                      <p className="text-2xl font-bold">{siteStats.total} visits</p>
                      <div className="mt-2 space-y-1">
                        {Object.entries(siteStats.bots)
                          .sort((a, b) => b[1] - a[1])
                          .map(([bot, count]) => (
                            <div key={bot} className="flex justify-between text-sm">
                              <span className="text-gray-400">{bot}</span>
                              <span>{count}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Visits Table */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Visits</h2>
              {visits.length === 0 ? (
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <p className="text-gray-400">No bot visits recorded yet.</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Bot visits will appear here once AI crawlers visit your sites.
                  </p>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm">Bot</th>
                        <th className="px-4 py-3 text-left text-sm">Site</th>
                        <th className="px-4 py-3 text-left text-sm">Path</th>
                        <th className="px-4 py-3 text-left text-sm">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {visits.slice(0, 100).map(visit => (
                        <tr key={visit.id} className="hover:bg-gray-700/50">
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                              {visit.bot}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-300">{visit.site}</td>
                          <td className="px-4 py-3 text-gray-400 font-mono text-sm max-w-xs truncate">
                            {visit.path}
                          </td>
                          <td className="px-4 py-3 text-gray-400 text-sm">
                            {formatDate(visit.timestamp)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
