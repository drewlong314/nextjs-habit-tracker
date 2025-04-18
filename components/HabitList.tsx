'use client'

import { useEffect, useState } from "react";

interface Habit {
    title: string,
    startDay: Date,
    dates: [{ Date: boolean }]
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
            {habits ? habits[0].title : "Loading"}
        </div>
    );
}
