import React from 'react';
import Items from './Items';
import {PRODUCT, RESOURCES, COMPNY, SUPPORT} from './FooterMenu';

const FooterItems = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 py-16 lg:ml-20">
      <Items Links={PRODUCT} title="PRODUCT"/>
      <Items Links={RESOURCES} title="RESOURCES"/>
      <Items Links={COMPNY} title="COMPNY"/>
      <Items Links={SUPPORT} title="SUPPORT"/>
    </div>
  )
}

export default FooterItems
