-- Bus route

CREATE TABLE bus_route(
route_id INT AUTO_INCREMENT PRIMARY KEY,
route_name VARCHAR(255) NOT NULL,
latitude DECIMAL(9,6),
longitude DECIMAL(9,6)
);

