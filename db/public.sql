-- Active: 1705366363137@@localhost@5432@api_marcas@public
create table tbl_marca
(
    id serial primary key,
    nombre varchar(500),
    sonido varchar(10),
    creado TIMESTAMP DEFAULT current_timestamp
)