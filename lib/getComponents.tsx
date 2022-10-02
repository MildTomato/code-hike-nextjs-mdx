import Image from "next/image";
import NumberSection from "~/components/NumberSection";
import { CH } from "@code-hike/mdx/components";

export type MDXComponentsType = "guide" | "blog" | "lp";

export default function mdxComponents(type: MDXComponentsType) {
  const components = {
    // random custom component
    NumberSection: (props: any) => {
      return <NumberSection {...props} />;
    },
    // code hike component
    CH,
  };

  return components;
}
