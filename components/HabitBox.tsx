interface HabitBoxParams {
    isChecked: boolean
}

export default function HabitBox({ isChecked }: HabitBoxParams) {
    return (
        <div className={`${isChecked ? "bg-green-500" : " bg-gray-700"} border-1 border-black h-4 w-4`} />
    );
}
