import { NavLink, Outlet } from 'react-router-dom'
import GithubLogo from '../assets/github.svg'
import JobloopLogo from '../assets/jobloop-logo-color.png'
import { GoTopButton } from '../components/GoTopButton'
export function LayoutRoot() {
	function toggleMenu() {
		document.querySelector('.nav-bar').classList.toggle('hidden')
		document.querySelector('nav svg').classList.toggle('active')
	}
	return (
		<>
			<header>
				<nav>
					<svg
						onClick={() => toggleMenu()}
						className='ham hamRotate hidden-invert'
						viewBox='0 0 100 100'
						width='40'>
						<path
							className='line top'
							d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
						/>
						<path className='line middle' d='m 30,50 h 40' />
						<path
							className='line bottom'
							d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
						/>
					</svg>
					<ul className='nav-bar hidden'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'active' : '')}
								onClick={() => toggleMenu()}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) => (isActive ? 'active' : '')}
								onClick={() => toggleMenu()}>
								About
							</NavLink>
						</li>
					</ul>
				</nav>
				<div id='title'>
					<h1>Enhetsregisteret prosjekt</h1>
				</div>
			</header>
			<main>
				<GoTopButton />
				<Outlet />
			</main>

			<footer>
				<div className='footer'>
					<div>
						<img
							className='jobloop'
							src={JobloopLogo}
							alt='Jobloop - matchmaking i arbeidslivet skaper muligheter for mange!'
							width={60}
						/>{' '}
						<a
							href='https://www.kodehode.no/'
							target='_blank'
							title='JobLoop - Kodehode'>
							Kodehode
						</a>
					</div>
					<div className='vr'>&nbsp;</div>
					<div>
						<img
							className='github'
							src={GithubLogo}
							alt='Project on GitHub'
							width={25}
						/>
						<a
							href='https://github.com/Inna-B10/Enhetsregisteret'
							target='_blank'
							title='React project - Enhetsregisteret'>
							Module D - React project
						</a>
					</div>
				</div>
			</footer>
		</>
	)
}
