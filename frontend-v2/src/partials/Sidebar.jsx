/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BsFillPinAngleFill, BsPersonCircle } from 'react-icons/bs'
import { TbRulerMeasure } from 'react-icons/tb'
import { HiHome } from 'react-icons/hi2'

import { IoIosCube } from 'react-icons/io'
import lambdaLogo from '../assets/lambda-logo.svg'
import { DiGoogleAnalytics } from 'react-icons/di'

import {
	BiLogOut,
	BiSolidCategoryAlt,
	BiMenu,
	BiGitBranch,
} from 'react-icons/bi'
import { LiaWindowClose } from 'react-icons/lia'
import { AiOutlineMenuFold, AiFillShop } from 'react-icons/ai'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [menuClicked, setMenuClicked] = useState(false)
	const [activePage, setActivePage] = useState('Home')

	return (
		<>
			{/* Mobile menu */}
			<BiMenu
				className='absolute z-40 ml-8 mt-12 p-2 lg:hidden text-lambdaPrimary rounded bg-darkblueLight text-4xl cursor-pointer'
				onClick={() => {
					setMenuClicked((prev) => !prev)
				}}
			></BiMenu>
			<div
				className={`bg-darkblueMedium  h-screen hidden lg:block ${
					sidebarOpen ? 'w-[6vw] px-2 py-10' : 'w-[20vw] p-10 '
				} ${
					menuClicked ? 'w-[70vw] absolute z-50 !block ' : ''
				}transition-all duration-300 ease-in-out`}
			>
				<div className='relative h-full'>
					{/* Banner section */}
					<div
						className={`   ${sidebarOpen ? '' : `bg-[#1A2833] -m-10 -mx-7 pt-10 px-4 py-4 mb-4 rounded-b-lg`}`}
					>
						<div
							className={`${
								sidebarOpen ? 'flex-col' : ''
							} flex justify-between items-center`}
						>
							<div>
								{sidebarOpen ? (
									<>
										{/* <img className='w-10 mx-auto' src={lambdaLogo} alt=''></img> */}
									</>
								) : (
									<>
										<img className='w32 mx-auto' src={lambdaLogo} alt=''></img>
									</>
								)}
							</div>
							<LiaWindowClose
								className='text-xl hover:text-third-dark text-white block lg:hidden cursor-pointer '
								onClick={() => {
									setMenuClicked((prev) => !prev)
								}}
							></LiaWindowClose>
							<AiOutlineMenuFold
								size={30}
								className={` ${
									sidebarOpen ? 'rotate-180' : 'rotate-0'
								} text-white text-xl hover:text-lambdaPrimary-light hidden lg:block transition-all duration-300 ease-in-out cursor-pointer`}
								onClick={() => {
									setSidebarOpen((prev) => !prev)
								}}
							/>
						</div>
					</div>

					<div className='space-y-8 my-16 -ml-5 '>
						<NavLink
							to='/'
							className={({ isActive }) =>
								`link ${isActive ? 'bg-[#00A9817D] border-l-8  rounded-tr-sm rounded-br-sm border-greenLime py-2  ' : ''}${sidebarOpen ? '   flex justify-center' : ''} w-full flex gap-4 pl-0 items-center  cursor-pointer transition-all duration-300 ease-in-out `
							}
						>
							<HiHome size={23} className={` ml-3`}></HiHome>

							<div
								className={`text-xs text-white ${sidebarOpen ? 'hidden' : activePage === 'Home' ? '' : 'hover:text-green-700'}`}
							>
								Home
							</div>
						</NavLink>
						<div
							className={` ${
								sidebarOpen ? 'text-xs ml-5' : ''
							} font-medium uppercase text-[#45505D]  pt-6`}
						>
							analytics
						</div>
						<NavLink
							to='/analytics'
							className={({ isActive }) =>
								`link ${isActive ? 'bg-[#00A9817D] border-l-8  rounded-tr-sm rounded-br-sm border-greenLime py-2  ' : ''}${sidebarOpen ? '   flex justify-center' : ''} w-full flex gap-4 pl-0 items-center  cursor-pointer transition-all duration-300 ease-in-out `
							}
						>
							<DiGoogleAnalytics size={25} className={` ml-3`}></DiGoogleAnalytics>

							<div
								className={`text-xs text-white ${sidebarOpen ? 'hidden' : activePage === 'Analytics' ? '' : 'sidebar'}`}
							>
								New Analytics
							</div>
						</NavLink>
						{/* <NavLink
							to='/dashboard'
							className={({ isActive }) =>
								`link ${isActive ? 'bg-[#00A9817D] border-l-8  rounded-tr-sm rounded-br-sm border-greenLime py-2  ' : ''}${sidebarOpen ? '   flex justify-center' : ''} w-full flex gap-4 pl-0 items-center  cursor-pointer transition-all duration-300 ease-in-out `
							}
						>
							<BiSolidCategoryAlt size={23} className={` ml-3`}></BiSolidCategoryAlt>

							<div
								className={`text-sm text-white ${sidebarOpen ? 'hidden' : activePage === 'Dashboard' ? '' : 'sidebar'}`}
							>
								Report Detail
							</div>
						</NavLink> */}
					</div>
				</div>
				<a
					href='https://github.com/gham-khaled/lambda-memory-analysis/tree/dashboard-v2'
					target='_blank'
					className={`${sidebarOpen ? 'hidden' : 'flex'} text-white font-light bg-darkblueLight px-4 text-xs py-2 -mx-2 rounded-md`}
				>
					GitHub:{' '}
					<span className='font-semibold pl-2 uppercase'>Ghamgui Khaled </span>
				</a>
			</div>
		</>
	)
}

export default Sidebar
