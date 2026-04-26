import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

function TodoCard({ todo, handleDelete, handleCompleted, handleEdit }) {

    return (
        <>
            <div className=" border rounded-sm min-w-[100px] min-h-[100px] max-h-[250px] max-w-[300px] p-4 bg-white border-l-4 border-l-emerald-500 shadow-md flex flex-col justify-between">
                <div className="flex flex-row gap-4">
                    <h3 className={`text-lg font-bold mb-2 ${todo.completed ? 'line-through text-gray-400' : 'text-slate-900'}`}>{todo.subject}</h3>
                    {/* <h3 className="font-bold mb-2 text-slate-900">{todo.subject}</h3> */}
                    <button onClick={() => handleCompleted(todo.id)}><span className="">{todo.completed ? '✅' : '⬜'}</span></button>
                </div>
                <p className="text-slate-600">{todo.todoText}</p>
                <div className="flex flex-col gap-2">
                    <p className="text-xs">{todo.editId ? 'edited: ' + new Date(todo.editId).toLocaleString(
                        'da-DK', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }
                    ) : 'created: ' + new Date(todo.id).toLocaleString(
                        'da-DK', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }
                    )}</p>
                    <div className="flex gap-2">
                        <button className="border min-w-8 shadow-sm p-1 hover:bg-gray-100" onClick={() => handleEdit(todo.id)}>
                            <PencilIcon className="h-4 w-4" />
                        </button>
                        <button className="border min-w-8 shadow-sm p-1 hover:bg-gray-100" onClick={() => handleDelete(todo.id)}>
                            <TrashIcon className='h-4 w-4' />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );

}

export default TodoCard;