import { Head, Link, usePage } from "@inertiajs/react";

export default function Home({posts, name}) {
    const {flash} = usePage().props;    
    const {component} = usePage();
    
    return (
        <>
            <Head title={component} />
            <h1 className="title">Hello {name}</h1>
            {flash.message && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">{flash.message}</div>}
            <div className="">
                {posts.data.map((post) => (
                    <div className="p-4 border-b" key={post.id} > 
                        <div className="text-sm text-slate-600">
                            <span>Posted On :</span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        <Link href={`/posts/${post.id}`} className="text-link">Read More...</Link>
                    </div>
                    ))}
            </div>
            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    link.url ? (

                    <Link href={link.url} key={link.label} dangerouslySetInnerHTML={{ __html:link.label }} className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}/>
                    ) : (
                    <span key={link.label} dangerouslySetInnerHTML={{ __html:link.label }} className="p-1 mx-1 text-slate-400"></span>
                    )
                ))}
            </div>
        </>
    
    );
};

