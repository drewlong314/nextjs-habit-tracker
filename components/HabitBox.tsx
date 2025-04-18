interface HabitBoxParams {
    date: [string, boolean]
}

export default function HabitBox({ date }: HabitBoxParams) {


    return (
        <div className="flex">
            <div className={`${date[1] ? "bg-green-500" : " bg-gray-700"} border-1 border-black h-4 w-4`} />
            <div className={`${date[1] ? "bg-green-500" : "bg-gray-700"} border-1 border-black h-4 w-4`} />
        </div>
    );
}
