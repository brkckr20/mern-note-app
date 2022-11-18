import React from 'react'

const NoteCard = ({ nots }) => {
    return (
        <div className='bg-white shadow-xl p-3 rounded-lg'>
            <h4 className='text-blue-600 text-2xl'>{nots.baslik}</h4>
            <p>{nots.aciklama}</p>
            <p>{nots.createdAt}</p>
        </div>
    )
}

export default NoteCard