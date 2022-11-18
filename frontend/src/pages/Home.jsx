import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import NotForm from '../components/NotForm';
const Home = () => {

    const [notlar, setNotlar] = useState([]);

    useEffect(() => {
        const fetchNotlar = async () => {
            const res = await fetch("http://localhost:4500/api/notlar");
            const json = await res.json();

            if (res.ok) {
                setNotlar(json)
            }
        }

        fetchNotlar();
    }, [notlar])

    return (
        <div className='max-w-7xl mx-auto pt-5'>
            <NotForm />
            <div className='grid grid-cols-3 gap-3 mx-2'>
                {
                    notlar.map(n => (
                        <NoteCard nots={n} key={n._id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home