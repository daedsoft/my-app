import { useRef } from "react";

// aqui simulo que traigo datos del backend:
import categories from './data/categories.json'
import subCategories from './data/subcategories.json'

function App() {

  // esta ref permite manipular el segundo select
  const subcategoriesRef = useRef()
  
  // esta funcíon maneja el cambio en el select principal, para que el contenido del segundo select cambie según la categoría seleccionada:
  const handleChange = (e) => {
    // obtiene el id(value) del option:
    let idSelected = e.target.value

    // filtra la lista de subcategorías:
    let filteredSubCat = subCategories.filter(i => i.id == idSelected)

    // borrar el contenido del segundo select:
    subcategoriesRef.current.innerHTML = ''
    
    // mapea el array de subtagorías ya filtradas y las inserta en el segundo select:
    filteredSubCat.map((j) => {
      subcategoriesRef.current.innerHTML += `<option value=${j.id}>${j.name}</option>`
    })
  }

  return (
    <div className="App">
      {/* este es el primer select, carga al iniciar con los datos de las categorías */}
      <label>Categorias </label>
      <select onChange={handleChange}>
        <option value="">Selecciona una categoría</option>
        {
          categories.map((i) => (
            <option value={i.id} key={i.id}>{i.name}</option>
          ))
        }        
      </select>

      {/* este es el segundo select, está vacío ya que su contenido depende de lo que se seleccione en el primer select */}
      {/* tiene asignada una Ref para poder manipularlo desde el otro select */}
      <label> Subcategorias </label>
      <select ref={subcategoriesRef}>        
      </select>
    </div>
  );
}

export default App;
