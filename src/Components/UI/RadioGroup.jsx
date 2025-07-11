"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { FaCircle } from "react-icons/fa";
import { cn } from "../../lib/utils";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                " h-4 w-4 rounded-full border border-primary text-primary ",
                className,
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                {/* <Circle className="h-2.5 w-2.5 fill-current text-current" /> */}
                <FaCircle className="text-blue-700"/>
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
