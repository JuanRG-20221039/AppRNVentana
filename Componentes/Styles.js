
import { StyleSheet } from 'react-native';

//LOGIN
export const StyleLogin = StyleSheet.create({
  //LOGIN
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#023047"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%",
  },
  Center:{
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    textAlign: "center",
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
});

//PRINCIPAL
export const StylePrincipal = StyleSheet.create({
  Contenedor:{
    backgroundColor: "#fff",
    width:'100%',
    height:'100%',
  },
  Bienvenida:{
    backgroundColor:'#8ecae6',
    padding:10,
    borderRadius:8,
    width:'90%',
    marginTop:20,
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  btnToggle: {
    color: "#000",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  titulo1: {
    color: "#000",
    fontSize: 26,
    lineHeight: 30,
    paddingHorizontal: 20,
    marginTop: 10,
    padding: 10,
    fontWeight: "bold",
  },
  texto1: {
    color: "#000",
    fontSize: 16,
    paddingHorizontal: 20,
    margin:10,
  },
  titulo: {
    color: "#fff",
    fontSize: 26,
    lineHeight: 30,
    paddingHorizontal: 20,
    marginTop: 10,
    padding: 10,
    fontWeight: "bold",
  },
  texto: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 25,
    margin: 10,
    marginBottom: 10,
  },
  image: {
    width:100,
    height:100,
    borderRadius:8,
    marginRight:20,
  },
  CenterCard:{
    justifyContent: 'center',
    alignItems: "center",
  },
  card: {
    width:"90%",
    backgroundColor:"#023047",
    borderRadius:8,
    marginTop:15,
    marginBottom:15,
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  productoContainer: {
    flexDirection:'row'
  },
  button: {
    width:'90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  ContBoton:{
    width:'100%',
    justifyContent: 'center',
    alignItems: "center",
    margin:30,
  },
  buttonInfo: {
    width:'90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  buttonInfoC: {
    margin:10,
  },
});
//HEADRE PRINCIPAL Y BUSCAR
export const StyleEncabezadoBuscador = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#023047",
    paddingHorizontal: 20,
    paddingVertical: 15,
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  headerParte2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    paddingHorizontal: 10,
    marginRight: 10,
    marginTop: 25,
  },
  texto: {
    color:"#fff",
    fontSize:30,
  },
  img:{
    width: 50,
    height: 50,
  }
});

//BUSCAR
export const StyleBuscadorHistorial = StyleSheet.create({
  Contenedor:{
    backgroundColor:"#ffb703",
    width:'100%',
    height:'100%',
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  AllCard:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
  },
  card: {
    padding:10,
    flexDirection: 'column',
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "flex-start",
    width: "90%",
  },
  cardRow:{
    flexDirection:'row',
  },
  cardColum:{
    flexDirection:'column',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    margin:10,
  },
  NombreProducto:{
    fontSize:20,
    fontWeight:'bold',
  },
  DescripcionProducto:{
    marginTop:13
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  ContBoton:{
    width:'100%',
    justifyContent: 'center',
    alignItems: "center",
  },
  button: {
    width:'90%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
});

//PERFIL DE USUARIO
export const StylePerfilDeUsuario = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
    alignItems: "center",
    backgroundColor: "#023047",
  },
  DatosUser:{
    alignItems: "center",
    marginBottom:10,
  },
  Fcard:{
    marginBottom:20,
  },
  card: {
    padding:10,
    flexDirection: 'column',
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "flex-start",
    width: "90%",
  },
  sudtitulo: {
    color: "#000",
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  tituloBlanco: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 25,
    fontWeight: "bold",
  },
  textoBlanco: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 25,
  },
  titulo: {
    color: "#000",
    fontSize: 24,
    lineHeight: 25,
    fontWeight: "bold",
  },
  texto: {
    color: "#000",
    fontSize: 16,
    lineHeight: 25,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginBottom:20,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    justifyContent:'center',
    alignItems:'flex-start',
    margin:0,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin:0,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  cerrarSesion: {
    flexDirection: "row",
    alignItems: "center",width: "100%",
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

//DETALLES DEL PRODUCTO
export const StylesDetalleProducto = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023047",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: "90%",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent:'center',
    marginBottom: 20,
    flexDirection:'row',
  },
  nameContainer:{
    flexDirection:'column',
    alignItems: "center",
    margin:10
  },
  image: {
    width: 120,
    height: 120,
    borderRadius:8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  input: {
    width:'100%',
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000",
  },
  multilineInput: {
    width:'100%',
    height: 80,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000",
  },
  unitsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  unitButton: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 10,
  },
  unitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  unitsText: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  availableUnitsText: {
    marginLeft: 20,
    fontSize: 16,
    color: "#000", // Cambiado a un color más oscuro
  },
  buttonContainer: {
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  deleteButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:'95%',
    alignItems: "center",
  },
  saveButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:'95%',
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
});

export const StylesInfoEmpresa =  StyleSheet.create({
  Contenedor:{
    width:'100%',
    height:'100%',
    backgroundColor:'#ffb703',
    justifyContent:'center',
    alignItems:'center',
  },
  ScrollView:{
    width:'100%',
    backgroundColor:'#ffb703',
  },
  Card:{
    width:'90%',
    backgroundColor:'#023047',
    borderRadius:8,
    //SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //SHADOW
    padding:20,
    margin:19,
  },
  Titulo:{
    fontSize:25,
    fontWeight:'bold',
    margin:5,
    color:'#fff',
    textDecorationLine:'underline'
  },
  SubTitulo:{
    fontSize:20,
    margin:5,
    color:'#fff',
  },
  Texto:{
    fontSize:14,
    margin:5,
    color:'#fff',
  },
});

export const StylesIot = StyleSheet.create({
  Fondo:{
    width:'100%',
    height:'100%',
    backgroundColor:'#023047',
    justifyContent:'center',
    alignItems:'center',
  },
  ScrollView:{
    width:'100%',
    backgroundColor:'#023047',
    paddingTop:60,
  },
  Center:{
    justifyContent:'center',
    alignItems:'center',
  },
  CenterToken:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:-20,
  },
  Titulo:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold',
    marginBottom:-10,
  },
  Texto:{
    margin:10,
    color:'#000',
    fontSize:20,
  },
  Card:{
    backgroundColor:'#fff',
     //SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
     //SHADOW
    width:'90%',
    height:'90%',
    borderRadius:8,
    paddingBottom:50,
  },
  Row:{
    flexDirection:'row',
  },
  Col:{
    flexDirection:'column',
  },
  input: {
    height: 40,
    width: "80%",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  CenterCard:{
    padding:10,
  },
  button: {
    width:'45%',
    margin:5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    //sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    //sombra
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});