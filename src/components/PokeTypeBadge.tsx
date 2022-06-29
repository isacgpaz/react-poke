import classNames from "classnames";

type PokeTypeBadgeProps = {
  title: string;
}

export function PokeTypeBadge({ title }: PokeTypeBadgeProps) {
  return (
    <div className={classNames("px-3 py-0.5 rounded-md text-white w-fit", title)}>
      <span className="capitalize text-sm">{title}</span>
    </div>
  );
}