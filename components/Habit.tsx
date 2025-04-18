import HabitBox from "./HabitBox"

interface Habit {
    title: string,
    startDay: string,
    dates: [[string, boolean]]
}

interface HabitParams {
    habit: Habit
}

export default function Habit({ habit }: HabitParams) {

    return (
        <div>
            <div>{habit.title}</div>
            <div>{habit.startDay}</div>
            <div className="flex flex-col h-20">
                {habit.dates.map((date: [string, boolean], i) => {
                    return <HabitBox date={date} key={i} />
                })}
            </div>
        </div>
    );
}
