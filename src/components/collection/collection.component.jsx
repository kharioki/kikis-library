import React from 'react';

import './collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const Collection = ({collection}) => {
    const { title, items } = collection;
    return (
    <div className='collection'>
        <h1 className='title'>
            {title}
        </h1>
        <div className='preview'>
            {items.length && (
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            )}
        </div>
    </div>
)}

export default Collection;