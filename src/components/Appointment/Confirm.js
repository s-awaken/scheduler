import React from 'react';
import Button from "components/Button.js"
const Confirm = (props) => {

  const confirm = ()=>{
    props.onConfirm()
  }

  const cancel = ()=>{
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button danger onClick = {()=>{cancel()}}>Cancel</Button>
        <Button danger onClick = {()=>{confirm()}}>Confirm</Button>
      </section>
    </main>

  );
};

export default Confirm;