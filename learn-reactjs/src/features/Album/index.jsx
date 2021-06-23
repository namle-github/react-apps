import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            title: 'Qua khung cửa sổ',
            thumbnail_url: 'https://i.scdn.co/image/ab67616d00001e024a5c0d176134cb5ab9db4924'
        },
        {
            id: 2,
            title: 'Vùng ký ức',
            thumbnail_url: 'https://i.scdn.co/image/ab67616d00001e02f164fabd64c6b087d431104c'
        },
        {
            id: 3,
            title: 'Mascara',
            thumbnail_url: 'https://i.scdn.co/image/ab67616d00001e023a82403bfe141a2cc39a1911'
        },
    ];

    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;