import Layout from "@/components/Layout";

export default function NewProduct() {
    return (
        <Layout>
            <h1 className="text-blue-900 mb-2">New Produc</h1>
            <input type="text" placeholder="product name" />
            <textarea placeholder="description"></textarea>
        </Layout>
    )
}