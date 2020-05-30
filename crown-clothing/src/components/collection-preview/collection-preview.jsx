import React from 'react'
import { withRouter } from "react-router-dom";

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.scss'


const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <div className="collection-preview">
    <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .slice(0, 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default withRouter(CollectionPreview)