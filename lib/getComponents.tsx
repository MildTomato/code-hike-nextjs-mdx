import { CH } from "@code-hike/mdx/components";

export default function mdxComponents() {
  const components = {
    // replace code hike components here
    CH,
    // just an example i am replacing any p tag like this
    p: (props: any) => <p className="custom-p" {...props} />,
  };

  return components;
}
