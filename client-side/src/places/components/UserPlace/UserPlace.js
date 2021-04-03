import React from "react";
import Places from "../../../places/components/Places/Places";

const UserPlace = (props) => {
  return (
    <>
      {props.user ? (
        <>
          <div>
            <h4 className="heading">
              <em>{props.user.username}</em> places.
            </h4>
          </div>
          <Places places={props.user.places} />
        </>
      ) : null}
    </>
  );
};

export default UserPlace;
