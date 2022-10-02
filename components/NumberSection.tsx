import React from "react";

interface Props {
  number: number | string;
  children: any;
}

const NumberSection = ({ number, children }: Props) => {
  let renderedChildren: React.ReactElement[] = [...children];

  return (
    <div className="border-scale-300 dark:border-scale-400 mb-0 ml-2 border-l pb-12 first:mt-12 last:mb-12">
      <div className="flex gap-3">
        <div className="flex">
          <div className="dark:bg-scale-300 dark:highlight-white/5 border-scale-500 -ml-3 flex h-6 w-6 items-center justify-center rounded border bg-white shadow">
            <span className="font-mono text-xs uppercase">{number}</span>
          </div>
        </div>
        <div className="pl-8 remove-header-margin">
          {children.length > 0 ? [...renderedChildren] : [renderedChildren]}
        </div>
      </div>
    </div>
  );
};

export default NumberSection;
