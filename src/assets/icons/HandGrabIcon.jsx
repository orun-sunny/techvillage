function HandGrabIcon({color}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='30'
			height='30'
			viewBox='0 0 16 16'
		>
			<path
				fill={color || '#444'}
				d='M12.6 4H12c0-.2-.2-.6-.4-.8s-.5-.4-1.1-.4c-.2 0-.4 0-.6.1-.1-.2-.2-.3-.3-.5-.2-.2-.5-.4-1.1-.4-.8 0-1.2.5-1.4 1-.1 0-.3-.1-.5-.1-.5 0-.8.2-1.1.4C5 3.9 5 4.7 5 4.8v.4c-.6 0-1.1.2-1.4.5C3 6.4 3 7.3 3 8.5v.7c0 1.4.7 2.1 1.4 2.8l.3.4C6 13.6 7.2 14 9.8 14c2.9 0 4.2-1.6 4.2-5.1V6.4c0-.7-.2-2.1-1.4-2.4zm-2.1-.2c.4 0 .5.4.5.6v.8c0 .3.2.5.4.5.3 0 .5-.1.5-.4 0 0 0-.4.4-.3.6.2.7 1.1.7 1.3v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-.3-4.3-1.3l-.4-.4C4.4 10.6 4 10.2 4 9.2v-.6c0-1 0-1.8.3-2.1.1-.2.4-.3.7-.3V7l-.3 1.2c0 .1 0 .1.1.1.1.1.2 0 .2 0l1-1.2V5c0-.1 0-.6.2-.8.1-.1.2-.2.4-.2.3 0 .4.2.4.4v.4c0 .2.2.5.5.5S8 5 8 4.8V3.5c0-.1 0-.5.5-.5.3 0 .5.2.5.5v1.2c0 .3.2.6.5.6s.5-.3.5-.5v-.5c0-.3.2-.5.5-.5z'
			/>
		</svg>
	);
}

export default HandGrabIcon;
