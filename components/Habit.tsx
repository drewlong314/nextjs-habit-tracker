import HabitBox from "./HabitBox"

interface Habit {
    title: string,
    startDay: string,
    dates: Record<string, boolean>
}

interface HabitParams {
    habit: Habit
}

export default function Habit({ habit }: HabitParams) {

    const findNearestSunday = () => {
        const currentDate = new Date()
        for (let i = 0; i < 7; i++) {
            const currentDay = `${currentDate.toString()[0]}${currentDate.toString()[1]}${currentDate.toString()[2]}`
            if (currentDay === "Sun") return currentDate
            else currentDate.setDate(currentDate.getDate() - 1)
        }
    }

    const getWeek = () => {
        const weekDays = []
        const nearestSunday = findNearestSunday()

        if (nearestSunday) {
            weekDays.push(nearestSunday.toISOString().split('T')[0])
            for (let i = 1; i < 7; i++) {
                const nextDay = new Date(nearestSunday)
                nextDay.setDate(nearestSunday.getDate() + i)
                weekDays.push(nextDay.toISOString().split('T')[0])
            }
        }
        return weekDays
    }

    return (
        <div>
            <div>{habit.title}</div>
            <div className="flex">
                {getWeek().map((date: string, i) => {
                    const isFiltered = Object.keys(habit.dates).filter((day) => {
                        if (day.split('T')[0] === date) {
                            return true
                        }
                    })

                    if (habit.dates[isFiltered[0]]) return <HabitBox isChecked={true} key={i} />
                    else if (new Date() < new Date(date)) return <HabitBox isChecked={false} isUnreachable={true} key={i} />
                    else return <HabitBox isChecked={false} key={i} />
                })}
            </div>
        </div>
    );
}
