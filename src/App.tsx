import './App.css';

export default function App() {
	return (
		<>
			<section className="min-h-screen bg-gray-900 text-white">
				<div className="container mx-auto px-4 py-16">
					<div className="mb-12 flex items-center justify-center gap-8">
						<svg
							className="logo-spin h-20 w-20 text-blue-400"
							viewBox="175.7 78 490.6 436.9"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g fill="#61dafb">
								<path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
								<circle cx="420.9" cy="296.5" r="45.7" />
							</g>
						</svg>

						<svg
							className="h-20 w-20"
							preserveAspectRatio="xMidYMid"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-1.871 -0.4069999999999627 259.721 257.849"
						>
							<linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
								<stop offset="0" stop-color="#41d1ff" />
								<stop offset="1" stop-color="#bd34fe" />
							</linearGradient>
							<linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
								<stop offset="0" stop-color="#ffea83" />
								<stop offset=".083" stop-color="#ffdd35" />
								<stop offset="1" stop-color="#ffa800" />
							</linearGradient>
							<path
								d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"
								fill="url(#a)"
							/>
							<path
								d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"
								fill="url(#b)"
							/>
						</svg>

						<svg
							className="h-20 w-20"
							viewBox="0 0 256 351"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
						>
							<defs>
								<path
									d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"
									id="a"
								/>
								<filter
									x="-50%"
									y="-50%"
									width="200%"
									height="200%"
									filterUnits="objectBoundingBox"
									id="b"
								>
									<feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1" />
									<feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
									<feComposite
										in="shadowOffsetInner1"
										in2="SourceAlpha"
										operator="arithmetic"
										k2="-1"
										k3="1"
										result="shadowInnerInner1"
									/>
									<feColorMatrix
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
										in="shadowInnerInner1"
									/>
								</filter>
								<path
									d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556z"
									id="c"
								/>
								<filter
									x="-50%"
									y="-50%"
									width="200%"
									height="200%"
									filterUnits="objectBoundingBox"
									id="d"
								>
									<feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="shadowBlurInner1" />
									<feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1" />
									<feComposite
										in="shadowOffsetInner1"
										in2="SourceAlpha"
										operator="arithmetic"
										k2="-1"
										k3="1"
										result="shadowInnerInner1"
									/>
									<feColorMatrix
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
										in="shadowInnerInner1"
									/>
								</filter>
							</defs>
							<path
								d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z"
								fill="#FFC24A"
							/>
							<use fill="#FFA712" fill-rule="evenodd" />
							<use filter="url(#b)" />
							<path
								d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z"
								fill="#F4BD62"
							/>
							<use fill="#FFA50E" fill-rule="evenodd" />
							<use filter="url(#d)" />
							<path
								fill="#F6820C"
								d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
							/>
							<path
								d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
								fill="#FDE068"
							/>
							<path
								d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z"
								fill="#FCCA3F"
							/>
							<path
								d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689z"
								fill="#EEAB37"
							/>
						</svg>
					</div>

					<div className="fade-in mb-16 text-center">
						<h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-6xl font-bold text-transparent">
							Coming Soon
						</h1>
						<p className="mb-8 text-2xl text-gray-400">A real world social blog project</p>
					</div>

					<hr className="fade-in text-white" />

					<div className="fade-in mt-8 text-center">
						<p className="mb-4 text-gray-400">Built with cutting-edge technologies</p>
						<div className="flex flex-wrap justify-center gap-4">
							<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
								React
							</span>
							<span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
								Vite
							</span>
							<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
								TypeScript
							</span>
							<span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
								Firebase
							</span>
							<span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-400">
								Tailwind CSS
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
