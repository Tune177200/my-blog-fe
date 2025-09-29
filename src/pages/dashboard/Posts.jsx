import { useState, useEffect } from "react";
import API from "../../api"; // giả sử bạn có API setup
import { Link } from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await API.get("/posts");
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Bạn có chắc muốn xóa post này?")) return;
        try {
            await API.delete(`/posts/${id}`);
            fetchPosts(); // reload posts
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Posts</h3>
                <Link to="/dashboard/posts/new" className="btn btn-primary">
                    Add New Post
                </Link>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.status}</td>
                                    <td>{post.createdAt}</td>
                                    <td>
                                        <Link
                                            to={`/dashboard/posts/edit/${post.id}`}
                                            className="btn btn-sm btn-outline-warning me-2"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDelete(post.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No posts found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
