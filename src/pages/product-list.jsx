import ProductPreview from '../components/product-preview/product-preview';
import ProductService from '../models/services/productService.js';

function ProductList() {
  const data = ProductService.getProducts();

  return (
    <>
      <ul className="products-list">
        {data.map((product, index) => (
          <li key={index} className="products-list">
            <ProductPreview product={product} seeMore={false}></ProductPreview>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
