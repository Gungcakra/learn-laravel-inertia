import { Head, useForm } from "@inertiajs/react";

export default function Edit({post}) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }
    return (
        <>
            <Head title="Edit Post" />
            <h1 className="title">Update Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows={10}
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}
                    <button className="bg-green-500 mt-4 text-white p-1 rounded"  disabled={processing}>Update Post</button>
                </form>
            </div>
        </>
    );
}
