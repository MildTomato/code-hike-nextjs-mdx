import { MDXProvider } from '@mdx-js/react'
import { NextSeo } from 'next-seo'
import getComponents, { MDXComponentsType } from '~/lib/getComponents'

interface Props {
  meta: {
    author: string
    type: MDXComponentsType
  }
}

const ContentsLayout: React.FC<Props> = (props: any) => {
  return (
    <>
      <NextSeo {...props.meta} />
      <MDXProvider components={getComponents(props.meta.type)}>
        <div className="prose mx-auto my-32">{props.children}</div>
      </MDXProvider>
    </>
  )
}

export default ContentsLayout
