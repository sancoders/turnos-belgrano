-- Datos inventados para la demo. Ninguno de estos telefonos ni mails es de nadie.
insert into public.servicios (nombre, precio) values
  ('Corte', 12000),
  ('Color', 35000),
  ('Brushing', 9000),
  ('Alisado', 60000),
  ('Manicura', 8000);

insert into public.turnos (nombre, telefono, email, servicio, fecha, hora, comentarios, estado) values
  ('Marina Losada',    '11 5555 0182', 'marina.losada@ejemplo.com',  'Color',    '2026-09-16', '10:00', 'Quiero un tono mas claro que la vez pasada', 'pendiente'),
  ('Carla Beltran',    '11 5555 0294', 'carla.beltran@ejemplo.com',  'Corte',    '2026-09-16', '11:30', '',                                            'confirmado'),
  ('Sofia Recalde',    '11 5555 0347', 'sofia.recalde@ejemplo.com',  'Brushing', '2026-09-17', '09:00', 'Tengo un casamiento a las 13',               'pendiente'),
  ('Julieta Amaya',    '11 5555 0411', 'julieta.amaya@ejemplo.com',  'Alisado',  '2026-09-17', '15:00', 'Es la primera vez que me hago alisado',      'pendiente'),
  ('Rocio Ferrari',    '11 5555 0533', 'rocio.ferrari@ejemplo.com',  'Manicura', '2026-09-18', '16:30', '',                                            'confirmado'),
  ('Delfina Otero',    '11 5555 0678', 'delfina.otero@ejemplo.com',  'Corte',    '2026-09-19', '18:00', 'Si se puede, con Vane',                      'cancelado');
