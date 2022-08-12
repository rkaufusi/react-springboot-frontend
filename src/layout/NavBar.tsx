import React from 'react'

const NavBar = () => {
	return (
		<div className="flex items-center justify-between h-16 bg-sky-500">
			<h3 className="text-2xl text-white ml-5">NavBar</h3>
			<button className="text-white border-zinc-100 border-2 mr-5 px-2">Add User</button>
		</div>
	)
}

export default NavBar
