// Using SVGProps to satisfy the generic Logo component interface
import type { SVGProps } from "react";

export default function MetaTrader5({ width, height, className, ...props }: SVGProps<SVGSVGElement>) {
    return (
        <img
            src="/logos/mt5.png"
            alt="MetaTrader 5"
            width={width}
            height={height}
            className={className}
            {...(props as any)}
        />
    );
}
