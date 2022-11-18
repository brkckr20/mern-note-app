import { useState } from 'react'
const NotForm = () => {

    const [baslik, setBaslik] = useState("");
    const [aciklama, setAciklama] = useState("");
    const [hata, setHata] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const not = {
            baslik,
            aciklama
        }

        const res = await fetch("http://localhost:4500/api/notlar", {
            method: "POST",
            body: JSON.stringify(not),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const json = await res.json();

        if (!res.ok) {
            setHata(json.hata)
        };

        if (res.ok) {
            setHata(null);
            setBaslik("")
            setAciklama("")
        }

    }

    return (
        <form onSubmit={handleSubmit} className="mb-3 px-2">
            <h3 className='font-semibold text-2xl'>Yeni not ekle</h3>
            <div>
                <div>
                    <label className='block'>Not Başlık</label>
                    <input type="text" className='shadow-lg' value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                </div>
                <div>
                    <label className='block'>Not Açıklama</label>
                    <input type="text" className='shadow-lg' value={aciklama} onChange={(e) => setAciklama(e.target.value)} />
                </div>
                <div>
                    <button type='submit' className='bg-green-500 p-2 my-2 shadow-lg rounded-full font-semibold text-white'>Gönder</button>
                </div>
            </div>
            {
                hata && (<div>{hata}</div>)
            }
        </form>
    )
}

export default NotForm