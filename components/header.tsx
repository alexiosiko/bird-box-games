export default function  Header({ children }: { children: React.ReactNode}) {
	return (
		<p className="text-3xl font-extrabold mb-4 text-center">
			{children}
		</p>
	)
}