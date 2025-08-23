import React from 'react'

export default function App() {
	const [status, setStatus] = React.useState<string>('loading...')
	const [error, setError] = React.useState<string>('')

	React.useEffect(() => {
		fetch('http://localhost:8080/api/health')
			.then(async (r) => {
				if (!r.ok) throw new Error(`HTTP ${r.status}`)
				const data = await r.json()
				setStatus(data.status ?? 'unknown')
			})
			.catch((e) => setError(String(e)))
	}, [])

	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
			<h1>SaaS Frontend</h1>
			<p>Backend health: <strong>{status}</strong></p>
			{error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
			<p>
				Try the backend directly: <a href="http://localhost:8080/api/health">/api/health</a>
			</p>
		</div>
	)
}