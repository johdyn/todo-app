
function TodoForm({ editInProgress, handleSubmit, todoText, todoSubject, setTodoText, setTodoSubject }) {


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="min-w-[400px] max-w-[600px] flex flex-col items-center gap-4 bg-white shadow-md p-2">
                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="todo-subject">Subject</label>
                        <input id="todo-subject" type="text" value={todoSubject} onChange={(e) => setTodoSubject(e.target.value)} className="ml-1 border rounded-sm p-2 w-64 focus:outline-none focus:border-emerald-600" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <label htmlFor="todo-input">Todo:</label>
                        <textarea id="todo-input" type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} className="max-h-64 ml-1 border rounded-sm p-2 w-64 focus:outline-none focus:border-emerald-600" />
                    </div>
                    <button disabled={!todoText && !todoSubject} className="m-8 border p-1 bg-emerald-600 hover:bg-emerald-700 text-white min-w-64 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">{editInProgress ? "Save changes" : "Create"}</button>
                </div>
            </form>
        </>
    );

}

export default TodoForm;