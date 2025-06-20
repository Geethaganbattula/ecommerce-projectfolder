import React from 'react';

const Products = ({ cart, setCart }) => {
  // Dummy product data (can be moved outside if reused elsewhere)
  const productList = [
    {
      id: 1,
      title: 'Gaming things',
      price: 2999,
      image: 'https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_193,w_2071,h_1164/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g8eqh7x3frj93nqfh2.jpg',
    },
    {
      id: 2,
      title: 'Home appliances',
      price: 3999,
      image: 'https://images.ctfassets.net/8cjpn0bwx327/138QI2UnZYOCdTr90TKTOM/4e09dfff709f25e5551adaa4756911dc/A_smartphone_displaying_a_home_control_app__demonstrating_the_convenience_of_mobile_applications_in_smart_homes.jpg',
    },
    {
      id: 3,
      title: 'Wireless Audio',
      price: 1499,
      image: 'https://cdn.shopify.com/s/files/1/0548/8849/7221/collections/Thunder.1170.png?v=1645039412',
    },
    {
      id: 4,
      title: 'More and more',
      price: 1999,
      image: 'https://tse1.mm.bing.net/th?id=OIP.vDVmIcGpcBhUa1doOrBl5gHaE8&pid=Api&P=0&h=180',
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="text">
          <h1>Different products we have :</h1>
        </div>
        <div className="list">
          {productList.map((product) => (
            <div className="list-detail" key={product.id}>
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="text">
                <h2>{product.title}</h2>
                <p>₹{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
