"use client"

import Button from "./button";



export default function Intro() {
	return (
		<div className="h-[500px] w-2/3 m-auto mt-64 mb-24">
			<div className="text-8xl">
				We make your 
				<span className='text-[var(--accent)]'> ideas </span> 
				come to 
				<span className='text-[var(--accent)]'> life</span>.
			</div>
			<Button onClick={() => console.log("Button")} className="mt-8 bg-[var(--accent)]">
				Contact Us
			</Button>
			<Button onClick={() => console.log("Button")} className="mt-8">
				Learn more
			</Button>
		</div>
	)
}