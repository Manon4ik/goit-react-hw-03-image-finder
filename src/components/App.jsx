import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
//import data from '../../src/data.json';
import api from '../api/api'
//console.log('api:',api);

export default class App extends Component {

  state = {
    //data: data.hits
    data: [],
    page: 1,
    totalPages: null,
    search: '',
    isLoading: false,
    error: null,
  }

  handleSubmitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const search = form.elements.search.value;
    //console.log('submit:', typeof(search));
    this.setState({ search })
  }

  loadMore = evn => {
    console.log('Load more');
    const images = document.querySelectorAll('.gallery-item').length
    console.log('images:', images);
    this.setState(
      (prevState) => (
        {page: prevState.page++}
      ),
    )

  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const data = await api.fetchPhotos()
      //const data2 = await api.fetchPhotoById(3277416)

      //console.log('data2:', data2);



      this.setState({ data: data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    // Check if the query has changed
    if (prevState.search !== this.state.search) {
      //console.log('changed');
      try {
        const data = await api.fetchPhotos(this.state.search)

        this.setState({ data: data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {

    const { data, page, isLoading } = this.state

    console.log('page:', page);

    return (
      <main>
        <Searchbar handleSubmitForm={this.handleSubmitForm} />
        {isLoading ? <Loader /> : <ImageGallery data={data} />}

        {data?.length > 0 && <Button page={page} loadMore={this.loadMore} />}
      </main>
    )
  }


}

