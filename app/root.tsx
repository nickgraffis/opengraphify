import { Scripts } from "@remix-run/react";
import { LiveReload, Outlet } from "remix";
import { Links } from "remix";
import styles from './styles/app.css'

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Links />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}