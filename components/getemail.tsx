import { useState } from "react";
import { Button } from "./ui/button";

export default function EmailReveal() {
  const [show, setShow] = useState(false);
  const email = "birdboxgames@hotmail.com";

  return (
    <div>
      {show ? (
        <a href={`mailto:${email}`}>{email}</a>
      ) : (
        <Button onClick={() => setShow(true)}>Show Email</Button>
      )}
    </div>
  );
}
