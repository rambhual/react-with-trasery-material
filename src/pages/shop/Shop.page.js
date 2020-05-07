import React, { useContext, Fragment } from "react";
import { ShopContext } from "../../context/shop";
import CollectionItem from "../../components/Collection-item";
export const ShopPage = () => {
  const { shops } = useContext(ShopContext);

  return (
    <Fragment>
      {shops.map(({ id, ...otherProps }) => (
        <CollectionItem key={id} {...otherProps} />
      ))}
    </Fragment>
  );
};
