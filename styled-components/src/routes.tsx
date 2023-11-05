import React, { useEffect } from "react";

import type { LoaderFunctionArgs } from "react-router-dom";
import {
  isRouteErrorResponse,
  json,
  Outlet,
  useLoaderData,
  useRouteError,
} from "react-router-dom";
import Header from "./components/Header";

export function Fallback() {
  return <p>Performing initial data "load"</p>;
}

export function Layout() {
  const addHeaderStickyClass = () => {
    let header = document.querySelector("header");
    if (header != null) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addHeaderStickyClass);
    return () => {
      window.removeEventListener("scroll", addHeaderStickyClass);
    };
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <h2>FOOTER</h2>
    </>
  );
}

export function RootErrorBoundary() {
  let error = useRouteError() as Error;
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
}

export function projectLoader({ params }: LoaderFunctionArgs) {
  if (params.projectId === "unauthorized") {
    throw json({ contactEmail: "administrator@fake.com" }, { status: 401 });
  }

  if (params.projectId === "broken") {
    // Uh oh - in this flow we somehow didn't get our data nested under `project`
    // and instead got it at the root - this will cause a render error!
    return json({
      id: params.projectId,
      name: "Break Some Stuff",
      owner: "The Joker",
      deadline: "June 2022",
      cost: "FREE",
    });
  }

  return json({
    project: {
      id: params.projectId,
      name: "Build Some Stuff",
      owner: "Joe",
      deadline: "June 2022",
      cost: "$5,000 USD",
    },
  });
}

export function Project() {
  const data: { project: Record<string, string | undefined> } =
    useLoaderData() as { project: Record<string, string | undefined> };

  return (
    <>
      <h1>Project Name: {data.project.name}</h1>
      <p>Owner: {data.project.owner}</p>
      <p>Deadline: {data.project.deadline}</p>
      <p>Cost: {data.project.cost}</p>
    </>
  );
}

export function ProjectErrorBoundary() {
  let error = useRouteError();

  // We only care to handle 401's at this level, so if this is not a 401
  // ErrorResponse, re-throw to let the RootErrorBoundary handle it
  if (!isRouteErrorResponse(error) || error.status !== 401) {
    throw error;
  }

  return (
    <>
      <h1>You do not have access to this project</h1>
      <p>
        Please reach out to{" "}
        <a href={`mailto:${error.data.contactEmail}`}>
          {error.data.contactEmail}
        </a>{" "}
        to obtain access.
      </p>
    </>
  );
}
