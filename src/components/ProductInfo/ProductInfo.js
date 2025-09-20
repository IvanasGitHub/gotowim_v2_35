import React from "react";
import products from "../../data/products";
import "./ProductInfo.css";

const ProductInfo = () => {
  return (
    <div className="product-info">
      <h1>🥑 Польза и Вред Продуктов</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <div className="info-grid">
            {product.benefits.map((item, index) => (
              <div className="info-card benefit" key={index}>
                <div className="icon">🍃</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="progress">
                  <div className="label">Польза: {item.ratio.good}%</div>
                  <div className="bar">
                    <div
                      className="good-bar"
                      style={{ width: `${item.ratio.good}%` }}
                    ></div>
                  </div>
                  <div className="label">Вред: {item.ratio.bad}%</div>
                  <div className="bar">
                    <div
                      className="bad-bar"
                      style={{ width: `${item.ratio.bad}%` }}
                    ></div>
                  </div>
                </div>
                <div className="indicator">
                  Рекомендуется:
                  {item.recommended.map((group, i) => (
                    <span key={i}>{group}</span>
                  ))}
                </div>
                <div className="indicator">
                  Лучшее время:
                  {item.bestTime.map((time, i) => (
                    <span key={i}>{time}</span>
                  ))}
                </div>
              </div>
            ))}

            {product.harms.map((item, index) => (
              <div className="info-card harm" key={index}>
                <div className="icon">⚠️</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="progress">
                  <div className="label">Польза: {item.ratio.good}%</div>
                  <div className="bar">
                    <div
                      className="good-bar"
                      style={{ width: `${item.ratio.good}%` }}
                    ></div>
                  </div>
                  <div className="label">Вред: {item.ratio.bad}%</div>
                  <div className="bar">
                    <div
                      className="bad-bar"
                      style={{ width: `${item.ratio.bad}%` }}
                    ></div>
                  </div>
                </div>
                <div className="indicator">
                  Рекомендуется:
                  {item.recommended.map((group, i) => (
                    <span key={i}>{group}</span>
                  ))}
                </div>
                <div className="indicator">
                  Лучшее время:
                  {item.bestTime.map((time, i) => (
                    <span key={i}>{time}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductInfo;
