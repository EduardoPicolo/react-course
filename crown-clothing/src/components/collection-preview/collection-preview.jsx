import React from 'react'

import CollectionItem from '../collection-item/collection-item.collection'

import './collection-preview.scss'


const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .slice(0, 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
    </div>
  </div>
)

export default CollectionPreview