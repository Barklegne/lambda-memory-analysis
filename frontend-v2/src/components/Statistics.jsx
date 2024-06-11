/* eslint-disable react/prop-types */

function Statistics({ title, icon, loadingQuery, query }) {
	return (
		<div className='bg-[#1A2833] rounded px-3 py-2.5 flex gap-3 items-center'>
			{icon}{' '}
			<div>
				<div className='text-xs text-[#B4B4B4] pb-1'>{title}</div>

				{loadingQuery ? (
					<div className='h-2 bg-slate-700 rounded mt-2'></div>
				) : (
					<div className='font-bold text-white '>{query}</div>
				)}
			</div>
		</div>
	)
}

export default Statistics
