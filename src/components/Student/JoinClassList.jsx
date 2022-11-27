import React from "react";
import Classview from "./Classview";

export default function JoinClassList(props) {
  const classes = props.classes;

  return (
    <div className="row row-cols-1 row-cols-md-2">
      {classes.map((cl_ass) => (
        <Classview
          classId={cl_ass.id}
          tittle={cl_ass.name}
          description={cl_ass.description}
        />
      ))}
    </div>
  );
}
