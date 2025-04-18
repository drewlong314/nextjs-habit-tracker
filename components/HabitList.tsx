'use client'

import { useEffect, useState } from "react";
import Habit from "./Habit";

export interface Habit {
    title: string,
    startDay: string,
    dates: Record<string, boolean>
}

export default function HabitList() {
    const [habits, setHabits] = useState<[Habit] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api');
            const json = await res.json();
            setHabits(json);
        };
        fetchData();
    }, [])

    return (
        <div>
            {habits?.length && habits.map((habit, i) => {
                return <Habit habit={habit} setHabits={setHabits} key={i} />
            })}
        </div>
    );
}
