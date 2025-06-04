import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white/25 rounded grid grid-cols-7 grid-rows-5 gap-x-4 gap-y-16 p-4 min-w-full">
      <div className="col-span-7 grid grid-cols-subgrid gap-4 place-items-stretch">
        <div className="grid place-items-center col-start-4 bg-amber-400 hover:scale120 hover:transition-transform hover:duration-300 hover:ease-in-out">
          <img
            src="https://cdn.bdolytics.com/img/new_ui_common_forlua/window/stable/ship_05.webp"
            alt="Bartali Sailboat"
            width="100"
            className="hover:scale120 hover:transition-transform hover:duration-300 hover:ease-in-out"
          />
          <p>Bartali Sailboat</p>
        </div>
      </div>

      <div className="col-span-7 grid grid-cols-subgrid gap-4 place-items-stretch">
        <div className="col-start-2 bg-amber-400">x</div>
        <div className="col-start-6 bg-amber-400">x</div>
      </div>

      <div className="col-span-7 grid grid-cols-subgrid gap-4 place-items-stretch">
        <div className="col-start-3  bg-amber-400">x</div>
        <div className="col-start-5 bg-amber-400">x</div>
      </div>

      <div className="col-span-7 grid grid-cols-subgrid gap-4 place-items-stretch">
        <div className="col-start-2 bg-amber-400">x</div>
        <div className="col-start-6 bg-amber-400">x</div>
      </div>

      <div className="col-span-7 grid grid-cols-subgrid gap-4 place-items-stretch">
        <div className="col-start-1 bg-amber-400">x</div>
        <div className="col-start-3 bg-amber-400">x</div>
        <div className="col-start-5 bg-amber-400">x</div>
        <div className="col-start-7 bg-amber-400">x</div>
      </div>
    </div>
  );
}
