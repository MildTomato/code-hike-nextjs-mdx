import { MDXProvider } from "@mdx-js/react";

import getComponents from "~/lib/getComponents";

const ContentsLayout: React.FC<any> = (props: any) => {
  return (
    <MDXProvider components={getComponents()}>
      <div className="prose mx-auto my-32">{props.children}</div>
    </MDXProvider>
  );
};

export default ContentsLayout;
