import React from "react";
import Class from "./Class";

export default function Classlist(props) {
  const classes = props.classes;
  return (
    <div className="row row-cols-1 row-cols-md-2">
      {classes.map((classprop) => (
        <Class
          id={classprop.id}
          tittle={classprop.name}
          description={classprop.description}
          faculty={'Faculty of Information Technology'}
        />
      ))}
    </div>
  );
}
