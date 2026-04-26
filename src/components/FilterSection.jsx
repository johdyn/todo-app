import FilterCheckbox from './FilterCheckbox.jsx';

function FilterSection({ showOnlyCompleted, handleShowCompleted, showOnlyUncompleted, handleShowUncompleted, fromDate, setFromDate, untilDate, setUntilDate, searchText, setSearchText, handleFilterReset }) {

    return (
        <>
            <aside className="min-w-[300px] min-h-[500px] flex flex-col gap-2 bg-white shadow-md p-4 mt-8">
                <h3 className='font-bold'>Filters</h3>
                <div className="border-b pb-4 mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Status</h4>
                    <FilterCheckbox filterCheckboxText="show completed tasks" checkedValue={showOnlyCompleted} handleFunction={handleShowCompleted} />
                    <FilterCheckbox filterCheckboxText="show uncompleted tasks" checkedValue={showOnlyUncompleted} handleFunction={handleShowUncompleted} />
                </div>
                <div className="flex flex-col gap-4 border-b pb-4 mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Date range</h4>
                    <div className='flex gap-2'>
                        <label>From:</label>
                        <input className="border rounded-sm p-2 focus:outline-none focus:border-emerald-600" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                    </div>
                    <div className='flex gap-2'>
                        <label>Until:</label>
                        <input className="border rounded-sm p-2 focus:outline-none focus:border-emerald-600" type="date" value={untilDate} onChange={(e) => setUntilDate(e.target.value)} />
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Search</h4>
                    <input type="text" className="border rounded-sm p-1 focus:outline-none focus:border-emerald-600 w-full" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search todos..."/>
                </div>
                <div>
                    <button className="mt-4 border p-1 bg-emerald-600 hover:bg-emerald-700 text-white min-w-32 w-full rounded-md disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => handleFilterReset()}>Reset filters</button>
                </div>
            </aside>
        </>
    )
}

export default FilterSection;