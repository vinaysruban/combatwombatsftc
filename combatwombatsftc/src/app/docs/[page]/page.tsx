import { MDXRemote } from 'next-mdx-remote/rsc'


export default async function Page({ params }: { params: { page: string } }) {
  console.log(params.page)
  //const res = await fetch('api/md')
  //console.log(res)

  return <h1 className="mx-4">My Page: {params.page}</h1>;
}
