CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(40) NOT NULL,
  description varchar(80) NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL
);

INSERT INTO product (name, description, price,image_url)
VALUES ('Tenet', 'movie', 19.99, 'https://i.pinimg.com/originals/71/2b/46/712b465c00e58971bd8ce7becf7f8b46.png', );