interface HabitBoxParams {
    isChecked: boolean,
    isUnreachable?: boolean
}

export default function HabitBox({ isChecked, isUnreachable }: HabitBoxParams) {
    const findBackgroundColor = () => {
        if (isUnreachable) return "bg-gray-500"
        else if (isChecked) return "bg-green-500"
        else return "bg-gray-700"
    }
    return (
        <div className={`${findBackgroundColor()} border-1 border-black h-4 w-4`} />
    );
}
