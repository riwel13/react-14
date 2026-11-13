
import './App.css'
import { Component } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ImageG from './components/ImageG/ImageG'
import { fetchImages } from './servis/api'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'

class App extends Component {

  state = {
    loading: false,
    page: 1,
    searchValue: "",
    largeImage: "",

    images: [
      
    ]


  }

  handleSearchSubmit = (searchV) => {
    console.log(searchV);
    this.setState({
      loading: true,
      page: 1,
      searchValue: searchV,
      images: []
    })
    fetchImages(searchV, 1).then((images) => {
      this.setState({
        images: images,
        loading: false
      })
    })
  }

  handleLoadMore = () => {
this.setState(
  (prev) => ({
    page: prev.page + 1,
    loading: true
  }), 
  () => {
    fetchImages(this.state.searchValue, this.state.page)
    .then((images) => {
      this.setState((prev) => ({
        images: [...prev.images, ...images],
        loading: false
      }))
    })

  }
)
  }

  handleBigImage = (image) => {
    this.setState({
      largeImage: image
    })

  }

  handleCloseModal = () => {
    this.setState({
      largeImage: ""
    })
  }

  render(){

    return(
      <>
      <SearchBar onSubmit={this.handleSearchSubmit}/>
      {this.state.loading && <Loader/>}
      <ImageG images={this.state.images} onClick={this.handleBigImage} />
      
      {this.state.images.length > 0 && (
<Button onClick={this.handleLoadMore}/> 
      )}
{this.state.largeImage && (<Modal largeImage={this.state.largeImage} onClose={this.handleCloseModal}/>)}

      </>
    )
  }
}
export default App
