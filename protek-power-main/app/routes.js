import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.jsx"),
    route("products", "routes/products.jsx"),
    route("about", "routes/about.jsx"),
    // If you're using a routes file, ensure you have a route defined like this:
    route("products/:slug", "routes/productDetail.jsx"),
        // 🆕 Blog system
    route("blog", "routes/blog/BlogPage.jsx"),
    route("blog/:id", "routes/blog/BlogDetail.jsx"),
    route("blog/write", "routes/blog/WriteBlog.jsx")
];