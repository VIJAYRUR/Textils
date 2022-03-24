import React from "react";

export default function Alert(props) {
   console.log(props.alert)
  return (
      props.alert &&  <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {props.alert.msg};
     
      </div>
    
  );
}
