# graficoEmbarazadas.R
needs(RMySQL)
# Crea conexion con la base de datos
storiesDb <- dbConnect(
  RMySQL::MySQL(), 
  username = 'usuario',
  password = 'password', 
  dbname = 'nombre_base',
  host = 'localhost', 
  port = 3306
)
vio_data = dbReadTable(storiesDb, "vio",   na.strings = c('',' ','?'), stringsAsFactors=F)
jpeg("assets/images/graficos/embarazadas.jpeg")
hist(vio_data$id_campo_actual)
dev.off()