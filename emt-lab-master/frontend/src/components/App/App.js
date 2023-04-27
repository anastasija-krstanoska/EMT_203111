
import './App.css';
import Authors from '../Authors/authors'
import Categories from '../Categories/categories'
import Books from '../Books/BookList/books'
import LibraryService from "../../repository/libraryRepository";
import React, { Component } from 'react'
import {BrowserRouter as Router,Navigate, Route,Routes} from 'react-router-dom'
import BookAdd from '../Books/BookAdd/bookAdd'
import BookEdit from "../Books/BookEdit/bookEdit";
import Header from '../Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            authors: [],
            books: [],
            categories: [],
            selectedBook : {} //objekt
        }
    }
    render(){
        return(
            <Router>
                <Header/>

                <Routes>
                    <Route path={"/authors"} element={<Authors authors={this.state.authors} />} />
                    <Route path={"/categories"} element={<Categories categories={this.state.categories} />} />
                    <Route path={"/books/add"} element={
                        <BookAdd categories={this.state.categories}
                                 authors={this.state.authors}
                                 onAddBook={this.addBook}/>}/>
                    <Route path={"/books/edit/:id"} exact element={
                        <BookEdit categories={this.state.categories}
                                  authors={this.state.authors}
                                  onEditBook={this.editBook}
                                  book={this.state.selectedBook}/>}/>
                    <Route path={"/books"} exact element={
                        <Books books={this.state.books}
                               onDelete={this.deleteBook}
                               onEdit={this.getBook}
                               onMark={this.markBook}/>}/>
                    <Route path='*' element={<Navigate to='/books' />} />
                </Routes>

            </Router>


        );
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    componentDidMount(){
        this.loadAuthors();
        this.loadBooks();
        this.loadCategories();

    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data,

                })
            });
    }

    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }
    getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook : data.data
                })
            })
    }
    editBook = (id, name, category, author, availableCopies) => {
        LibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => this.loadBooks())
    }

    markBook = (id) => {
        LibraryService.markBookAsTaken(id)
            .then(() => {
                this.loadBooks()
            });
    }


}

export default App;
