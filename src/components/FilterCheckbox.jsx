export default function FilterCheckbox({filterCheckboxText, checkedValue, handleFunction}) {

    
    return (
        <>
    <div className="flex gap-2 ">
              <label htmlFor="completed">{filterCheckboxText}</label>
              <input className="accent-emerald-600" id="completed" type="checkbox" checked={checkedValue} onChange={(e) => handleFunction(e)} />
            </div>
</>
)
}