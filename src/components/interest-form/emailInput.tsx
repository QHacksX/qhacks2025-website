

export default function EmailInput(props: any) {
    return (
        <div>
            <label htmlFor="wordInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{props.title}</label>
            <input type="text" id="wordInput" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => props.setEmail(e.target.value)} placeholder={props.placeholder} />
        </div>
    )
}