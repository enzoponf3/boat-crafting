import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="text-main-text bg-linear-to-br from-(--bg-main) to-(--bg-sec) grid grid-rows-[auto_1fr_auto] min-h-dvh">
        <header className="p-4">
          <div className="mx-auto grid grid-cols-[1fr_1fr_1fr] max-w-6xl">
            <div className="flex items-center gap-4">
              <a href="/">Home</a>
              <a href="/crafting">Crafting</a>
            </div>
            <div>
              <h1 className="font-bold text-2xl text-center">Boat Crafting</h1>
            </div>
            <select className="w-min place-self-end">
              <option className="text-black" value="en">
                En
              </option>
              <option className="text-black" value="es">
                Es
              </option>
            </select>
          </div>
        </header>
        <main className="max-w-6xl w-screen my-4 mx-auto">
          <Outlet />
        </main>
        <footer>Foot</footer>
      </div>
    </>
  );
}
