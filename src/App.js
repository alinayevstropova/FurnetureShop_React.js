import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Armchair',
          img: 'armchair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'armchair',
          price: '549.99'
        },
        {
          id: 2,
          title: 'Chair Grey',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chair',
          price: '50.25'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'sofa',
          price: '250.36'
        },
        {
          id: 4,
          title: 'Chair White',
          img: 'white-chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chair',
          price: '59.25'
        },
        {
          id: 5,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'table',
          price: '600.27'
        },
        {
          id: 6,
          title: 'Sofa Modern',
          img: 'sofa-modern.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'sofa',
          price: '900.27'
        },
      ],
      showFullItem: false,
      fullItem: {}

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem=this.onShowItem.bind(this)
  }
  

  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} /> }
        <Footer/>
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders:this.state.orders.filter(el =>el.id !== id)})
  }

  

  addToOrder(item) {
    let isInArray
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArray = true
    })
    if (!isInArray)
      this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
