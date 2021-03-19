CREATE TABLE twitter_id_table (
  tweet_id TEXT PRIMARY KEY NOT NULL,
  created_ad DATE, -- this should be in the formate yyyy-mm-dd
  tweet_text TEXT,
  sentiment TEXT,
  review_date DATE 
);

-- This table will contain only unique values
CREATE TABLE products_table (
  product_id TEXT PRIMARY KEY NOT NULL UNIQUE,
  product_title TEXT
);

-- Customer table for first data set
CREATE TABLE customers_table (
  customer_id INT PRIMARY KEY NOT NULL UNIQUE,
  customer_count INT
);

-- vine table
CREATE TABLE vine_table (
  review_id TEXT PRIMARY KEY,
  star_rating INTEGER,
  helpful_votes INTEGER,
  total_votes INTEGER,
  vine TEXT,
  verified_purchase TEXT
);