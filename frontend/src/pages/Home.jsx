import { useEffect, useState } from 'react';
const Home = () => {

    const [notlar, setNotlar] = useState([]);

    useEffect(() => {
        const fetchNotlar = async () => {
            const res = await fetch("http://localhost:4500/api/notlar");
            const json = res.json();

            if (res.ok) {
                setNotlar(json)
            }
        }

        fetchNotlar();
    }, [])

    return (
        <div className='max-w-7xl mx-auto pt-3'>
            <div>
                {notlar.map(not => {
                    <p key={not._id}>{not.baslik}</p>
                })}
            </div>
        </div>
    )
}

export default Home