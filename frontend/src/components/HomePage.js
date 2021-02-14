import Header from './Header'
import SlideShow from './SlideShow'
import ProductsView from './ProductsView'
import '../index.css'

 function HomePage() {
  
  
    return (
        <>
              <Header />
              <div className="slide-product-div">
                <SlideShow />
                <ProductsView />
              </div>
        </>
    )
}
export default HomePage