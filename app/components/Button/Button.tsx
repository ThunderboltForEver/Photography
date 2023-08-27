"use client";
function eventHandler() {}

export default function Button() {
  return <button onClick={eventHandler} className="btn max-w-max">Send it</button>;
}
