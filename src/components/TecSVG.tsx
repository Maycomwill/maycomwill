import * as Tooltip from "@radix-ui/react-tooltip";

interface SVGProps {
  icon: string;
  name: string;
}

function TecSVG({ icon, name }: SVGProps) {
  return (
    <Tooltip.Provider delayDuration={250}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="w-10 h-10">
            <img
              src={icon}
              width={40}
              alt="Tec's svg"
              className="grayscale transition hover:grayscale-0"
            />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="z-10">
            <Tooltip.Arrow className="fill-zinc-900" />
            <p className="rounded-md bg-zinc-900 p-2 font-bold uppercase">
              {name}
            </p>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default TecSVG;
